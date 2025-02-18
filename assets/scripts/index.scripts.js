function enviarEmail(){

const public_key = "9lkBUfGp_gObIo74x";
const private_key = "US_oRnkCiUGkpBQS25zU5";

(function () {
    emailjs.init(public_key);
})();

function mensagem() {
    const nome = document.getElementById("nome").value;
    alert(nome)
}


        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        const service_id = "service_mq37u4h";
        const template_id = "template_bmwj09m";

        emailjs
            .send(service_id, template_id, params)
            .than((res) => {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensagem").value = "";
            console.log(res);
            alert("E-mail enviado com sucesso!");
        })
        .catch((err) => console.log(err));
    }