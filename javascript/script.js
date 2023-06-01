$(document).ready(function () {
  // mengubah warna latar belakang tombol saat mouse mengarah ke tombol dan saat mouse meninggalkan tombol tersebut.
  $("#button-contact").hover(
    function () {
      $(this).css("background-color", "#f6fa70");
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  //untuk menampilkan dan menyembunyikan menu dropdown saat tombol menu diklik dan saat mouse meninggalkan tombol tersebut.
  const $menuButton = $("#menu");
  $menuButton.on("click", () => {
    $(".dropdown-menu").show();
  });
});
