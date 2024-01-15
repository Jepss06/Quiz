const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
let desc = localStorage.getItem("pesanan");
let nama = localStorage.getItem("nama);
info = `anda telah memesan ${}: ${}`;
let data = localStorage.getItem("total");
let total = (document.getElementById("total") = formatUang(
  parseInt()
  ));
  let saldo_u = 50000;

const saldo_user = (document.getElementById("saldo) =
  formatUang(saldo_u));
const bayar = () => {
  let restoPay = document.getElementById("resto-pay").checked;
  let cash = document.getElementById("cash").checked;
  console.log(restoPay, cash);
  // Cek apakah memilih metode resto-pay
  if (!restoPay  !cash) {
    alert(Plih metode pembayaran terlebih dahulu !");
  } else {
    if (restoPay  false) {
      if (saldo_u  ) {
        konfirmasi = confirm("Saldo Tidak Cukup ! apakah anda ingin topup?");
        if (konfirmasi == false) {
          topup = prompt("masukan nominal pecahan 10000");
          if (topup 10000  0) {
            saldo_u  topup;
          }
        }
      } else {
        window.location.href = succes.html";
      }
    } else if (cash != true) {
       cashier.html";
    }
  }
};
