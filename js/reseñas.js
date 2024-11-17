// script.js
function addReview() {
    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Verificar que todos los campos estén completos
    if (username && rating && comment) {
        // Crear una nueva reseña
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');
        
        const userHeading = document.createElement('h3');
        userHeading.textContent = username;
        
        const starsParagraph = document.createElement('p');
        starsParagraph.classList.add('stars');
        starsParagraph.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = comment;

        // Crear el botón de eliminación
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => reviewContainer.remove(); // Eliminar la reseña al hacer clic

        // Agregar los elementos a la reseña
        reviewContainer.appendChild(userHeading);
        reviewContainer.appendChild(starsParagraph);
        reviewContainer.appendChild(commentParagraph);
        reviewContainer.appendChild(deleteButton); // Añadir el botón de eliminación

        // Añadir la nueva reseña al contenedor de reseñas
        document.getElementById('reviews-container').appendChild(reviewContainer);

        // Limpiar los campos del formulario
        document.getElementById('username').value = '';
        document.getElementById('rating').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor, completa todos los campos para enviar tu reseña.');
    }

    function getRandomProfileImage() {
        // Genera un número aleatorio entre 1 y 4 para seleccionar la imagen de perfil
        const randomIndex = Math.floor(Math.random() * 4) + 1;
        return `imágenes/perfil${randomIndex}.png`;
    }
    
    function addProfileImagesToReviews() {
        const reviews = document.querySelectorAll('.review');
        
        reviews.forEach(review => {
            const profileImage = document.createElement('img');
            profileImage.src = getRandomProfileImage();
            profileImage.alt = 'Imagen de perfil';
            profileImage.classList.add('profile-image');
            
            // Inserta la imagen de perfil antes del nombre de usuario en la reseña
            review.insertBefore(profileImage, review.firstChild);
        });
    }
    
    // Llama a la función para agregar imágenes de perfil a las reseñas ya cargadas
    document.addEventListener('DOMContentLoaded', addProfileImagesToReviews);
    
}
