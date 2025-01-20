
    function copyToClipboard(elemenId, btnTextId, svgId) {
        // Mendapatkan teks dari elemen dengan id 'nomor-rekening'
        const nomorRekening = document.getElementById(elemenId).textContent;

        // Menyalin teks ke clipboard menggunakan Clipboard API
        navigator.clipboard.writeText(nomorRekening).then(function() {
            // Mengubah teks tombol untuk memberi tahu pengguna bahwa teks telah disalin
            const btnText = document.getElementById(btnTextId);
            const svgIcon = document.getElementById(svgId);

            
            btnText.innerHTML = "Berhasil disalin &#10003;";
            svgIcon.classList.add("hidden");
            btnText.classList.add('text-green-600');
            
            

            // Reset teks tombol setelah 2 detik
            setTimeout(function() {
                btnText.textContent = "Copy rekening";
                svgIcon.classList.remove("hidden");
                btnText.classList.remove('text-green-600');
            }, 2000);
        }).catch(function(error) {
            console.error("Gagal menyalin ke clipboard: ", error);
        });
    }

