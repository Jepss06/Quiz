
let Jomblo = [
	{
	  id: 0,
	  name: "Paket 1",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 10000,
	}
	{
	  id: 1,
	  name: "Paket 2",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 20000,
	}

	{
	  id: 2,
	  name: "Paket 3",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 30000,
	},
  ];
  
  const menuSection = document.querySelector(".menu-section");
  
  Jomblo.map((data) => {
	menuSection.innerHTML += (data.name, data.desc, data.price, data.id);
  });
  
  function iniApa(name,desc,price,id) {
	return `<div class="card">
		  <button class="kategori" aria-readonly="true">Paket</button>
		  <hr class="line" />
		  <div class="container-content">
			  <div>
				  <img
					  src="./images/example-product/indomie.jpg"
					  alt=""
					  class="produk-img"
				  />
			  </div>
			  <div class="content">
				  <p>${name}</p>
				  <p>${desc}</p>
				  <p>${price}</p>
				  <div class="content2">
					  <button class="tambah" id="pesan${id}">pesan</button>
				  </div>
			  </div>
		  </div>
	  </div>
	  `;
  }
  
  Jomblo.map((data) => {
	pesan = document.getElementById(`pesan${id}`)
	pesan.
  });