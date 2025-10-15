function showImage() {
  // Ubah teks output
  document.getElementById("output").innerText = "Here’s your image!";

  // Tambahkan gambar ke div
  const imgContainer = document.getElementById("image-container");

  // Cek apakah gambar sudah ada (biar tidak muncul dua kali)
  if (!document.getElementById("myImage")) {
    const img = document.createElement("img");
    img.src = "images/miris.jpg"; // Ganti URL dengan gambar kamu
    img.id = "myImage";
    img.alt = "A sample image";
    imgContainer.appendChild(img);
  }
}
