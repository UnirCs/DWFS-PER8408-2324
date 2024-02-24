document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const ctx = canvas.getContext('2d');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function() {
            const img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = reader.result;
        };

        reader.readAsDataURL(file);
    });

    applyFilterButton.addEventListener('click', function() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = brightness; // rojo
            data[i + 1] = brightness; // verde
            data[i + 2] = brightness; // azul
        }

        ctx.putImageData(imageData, 0, 0);
    });
});
