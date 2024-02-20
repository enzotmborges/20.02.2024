export const exibirHorario = (e) => {
        const dateObj = new Date();
        const hora = dateObj.getHours();
        const minuto = dateObj.getMinutes();
        const segundo = dateObj.getSeconds();
        let horarioFormatado = hora + "h:" + minuto + "m:" + segundo + "s";
        console.clear();
        console.log(horarioFormatado);
        document.getElementById("lnk").innerText = horarioFormatado;
    }