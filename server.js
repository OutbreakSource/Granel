const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs/promises')

const PORT = 3000;
app.listen(PORT, `192.168.0.14`)

//app.use('/images', express.static(path.join(__dirname, 'pics')))
app.get('/randomImage', async (req, res) => {

    const {category, muscle} = req.query;

    if (!category || !muscle){
        return res.status(400).json({error: "Missing params for category or muscle"});
    }

    try {
        const imagesDirectory = path.join(__dirname, 'pics', category, muscle);
        console.log(imagesDirectory);
        //C:/Users/danie/WebstormProjects/Granel/pics/Barbell/Glutes/

        const files = await fs.readdir(imagesDirectory);

        let currentImage;

        const requestImage = req.query.image;
        if (requestImage) {
            if (files.includes(requestImage)) {
                currentImage = requestImage;
            } else {
                return res.status(404).json({error: "Image not found"})
            }
        } else{
            const randomIndex = Math.floor(Math.random() * files.length);
            currentImage = files[randomIndex];
        }

        res.sendFile(path.join(imagesDirectory, currentImage));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error : "Internal Server Error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})



