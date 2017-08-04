 var modal = document.getElementById('modalSearch');

        var btn = document.getElementById("modalBtnSearch");
        var span = document.getElementsByClassName("closeModal")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }