document.addEventListener("DOMContentLoaded", () => {
  const messageText =
    "Selamat ulang tahun, Eldia Arthea Wiriyadie! Semoga hari spesialmu penuh dengan kebahagiaan dan cinta.🎂🎉";
  const messageElement = document.querySelector(".message");
  let charIndex = 0;

  function typeMessage() {
    if (charIndex < messageText.length) {
      messageElement.innerHTML += messageText.charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, 50);
    }
  }

  typeMessage();

  setTimeout(() => {
    const messageContainer = document.querySelector(".message-box");
    const messageElement2 = document.createElement("div");
    messageElement2.classList.add("message-bubble");
    messageContainer.appendChild(messageElement2);

    const profileImage2 = document.createElement("div");
    profileImage2.classList.add("profile-image2");
    messageElement2.appendChild(profileImage2);

    const messageText2 =
      "Another birthday means you have to start a new journey. Thank you for hanging in there, do your best this year.😉🙌🔥";
    const messageP2 = document.createElement("p");
    messageP2.classList.add("message");
    messageElement2.appendChild(messageP2);

    const messageTime2 = document.createElement("span");
    messageTime2.classList.add("message-time");
    messageTime2.textContent = "00.00";
    messageElement2.appendChild(messageTime2);

    let charIndex2 = 0;
    function typeMessage2() {
      if (charIndex2 < messageText2.length) {
        messageP2.innerHTML += messageText2.charAt(charIndex2);
        charIndex2++;
        setTimeout(typeMessage2, 50);
      }
    }
    setTimeout(typeMessage2, 150);
  }, messageText.length * 60);

  setTimeout(() => {
    const messageContainer = document.querySelector(".message-box");
    const messageElement3 = document.createElement("div");
    messageElement3.classList.add("message-bubble-left");
    messageContainer.appendChild(messageElement3);

    const profileImage3 = document.createElement("div");
    profileImage3.classList.add("profile-image2");
    messageElement3.appendChild(profileImage3);

    const messageText3 = "Ohh ya, this is our memories!";
    const messageP3 = document.createElement("p");
    messageP3.classList.add("message");
    messageElement3.appendChild(messageP3);

    const messageTime3 = document.createElement("span");
    messageTime3.classList.add("message-time");
    messageTime3.textContent = "00.00";
    messageElement3.appendChild(messageTime3);

    let charIndex3 = 0;
    function typeMessage3() {
      if (charIndex3 < messageText3.length) {
        messageP3.innerHTML += messageText3.charAt(charIndex3);
        charIndex3++;
        setTimeout(typeMessage3, 50);
      }
    }
    setTimeout(typeMessage3, 150);
  }, messageText.length * 130);

  setTimeout(() => {
    const messageContainer = document.querySelector(".message-box");
    const messageElement4 = document.createElement("div");
    messageElement4.classList.add("message-bubble-right", "pop-up");
    messageContainer.appendChild(messageElement4);

    const imageGallery = document.createElement("div");
    imageGallery.classList.add("image-gallery");
    messageElement4.appendChild(imageGallery);

    const galleryImages = ["images/memories1.jpeg", "images/memories2.jpeg"];
    let activeImageIndex = 0;

    galleryImages.forEach((imageSrc, index) => {
      const galleryImage = document.createElement("img");
      galleryImage.classList.add("gallery-image");
      if (index === activeImageIndex) {
        galleryImage.classList.add("active");
      }
      galleryImage.src = imageSrc;
      galleryImage.alt = "Gambar " + (index + 1);
      imageGallery.appendChild(galleryImage);

      galleryImage.addEventListener("click", () => {
        setActiveImage(index);
        updateImageCounter(index);
      });
    });

    const popUpBubble = document.querySelector(".pop-up");
    popUpBubble.classList.add("show");

    function setActiveImage(index) {
      activeImageIndex = index;
    }

    function updateImageCounter(index) {
      imageCounter.textContent = `${index + 1}/${galleryImages.length}`;
    }

    imageGallery.addEventListener("click", () => {
      activeImageIndex = (activeImageIndex + 1) % galleryImages.length;
      setActiveImage(activeImageIndex);
      updateImageCounter(activeImageIndex);
    });

    setActiveImage(activeImageIndex);
  }, messageText.length * 50 + messageText.length * 115);
});

const playVideoButton = document.getElementById("play-video-button");
const videoContainer = document.getElementById("video-container");
let videoVisible = false;

playVideoButton.addEventListener("click", () => {
  if (!videoVisible) {
    videoContainer.innerHTML = `
    <video width="100%" controls>
      <source src="Final.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
    videoContainer.style.display = "block";
    playVideoButton.textContent = "Tutup Video";
  } else {
    videoContainer.innerHTML = "";
    videoContainer.style.display = "none";
    playVideoButton.textContent = "Putar Video";
  }

  videoVisible = !videoVisible;
});
