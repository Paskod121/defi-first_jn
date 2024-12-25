 // Open the modal
 function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Function to toggle the music on/off
  function toggleMusic() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();  // Start the audio if it's paused
    } else {
      audio.pause();  // Pause the audio if it's playing
    }
  }


      




function ouvrirCadeau() {
    alert("Joyeux Noël ! 🎉🎄");
 
}

    