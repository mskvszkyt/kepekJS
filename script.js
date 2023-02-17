function KepValtoz(selected) {
    document.getElementById("image").src = selected.value;
}

function ChangeHeight() {
    document.getElementById("image").style.height = document.getElementById("sliHeight").value + "px";
}

function ChangeWidth() {
    document.getElementById("image").style.width = document.getElementById("sliWidth").value + "px";
}

function Blur() {
    if (document.getElementById("blur").checked) {
        document.getElementById("image").style.filter = "blur(5px)";
    }

    else {
        document.getElementById("image").style.filter.replace("blur(5px)","");
    }
}

function Opacity() {
    if (document.getElementById("opacity").checked) {
        document.getElementById("image").style.filter = "opacity(30%)";
    }
    else {
        document.getElementById("image").style.filter.replace("opacity(30%", "");
    }
}

function EffectValtoz(selected) {
    document.getElementById("image")
}