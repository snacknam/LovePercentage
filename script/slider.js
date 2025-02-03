// ===== 나이 슬라이더 =====
const ageLeftInput = document.getElementById("ageLeft");
const ageRightInput = document.getElementById("ageRight");
const ageFakeSlider = document.getElementById("ageFakeSlider");
const ageThumbLeft = ageFakeSlider.querySelector(".thumb.left");
const ageThumbRight = ageFakeSlider.querySelector(".thumb.right");
const ageRangeElem = ageFakeSlider.querySelector(".range");
const ageMinLabel = document.getElementById("ageMin");
const ageMaxLabel = document.getElementById("ageMax");

function setAgeLeftValue() {
    const min = parseInt(ageLeftInput.min);
    const max = parseInt(ageLeftInput.max);

    ageLeftInput.value = Math.min(parseInt(ageLeftInput.value), parseInt(ageRightInput.value) - 1);
    const percent = ((ageLeftInput.value - min) / (max - min)) * 100;
    ageThumbLeft.style.left = percent + "%";
    ageRangeElem.style.left = percent + "%";
    ageMinLabel.textContent = ageLeftInput.value;
}

function setAgeRightValue() {
    const min = parseInt(ageRightInput.min);
    const max = parseInt(ageRightInput.max);

    ageRightInput.value = Math.max(parseInt(ageRightInput.value), parseInt(ageLeftInput.value) + 1);
    const percent = ((ageRightInput.value - min) / (max - min)) * 100;
    ageThumbRight.style.right = 100 - percent + "%";
    ageRangeElem.style.right = 100 - percent + "%";
    ageMaxLabel.textContent = ageRightInput.value;
}

ageLeftInput.addEventListener("input", setAgeLeftValue);
ageRightInput.addEventListener("input", setAgeRightValue);

// ===== 키 슬라이더 =====
const heightLeftInput = document.getElementById("heightLeft");
const heightRightInput = document.getElementById("heightRight");
const heightFakeSlider = document.getElementById("heightFakeSlider");
const heightThumbLeft = heightFakeSlider.querySelector(".thumb.left");
const heightThumbRight = heightFakeSlider.querySelector(".thumb.right");
const heightRangeElem = heightFakeSlider.querySelector(".range");
const heightMinLabel = document.getElementById("heightMin");
const heightMaxLabel = document.getElementById("heightMax");

function setHeightLeftValue() {
    const min = parseInt(heightLeftInput.min);
    const max = parseInt(heightLeftInput.max);
    heightLeftInput.value = Math.min(parseInt(heightLeftInput.value), parseInt(heightRightInput.value) - 1);
    const percent = ((heightLeftInput.value - min) / (max - min)) * 100;
    heightThumbLeft.style.left = percent + "%";
    heightRangeElem.style.left = percent + "%";
    heightMinLabel.textContent = heightLeftInput.value;
}

function setHeightRightValue() {
    const min = parseInt(heightRightInput.min);
    const max = parseInt(heightRightInput.max);
    heightRightInput.value = Math.max(parseInt(heightRightInput.value), parseInt(heightLeftInput.value) + 1);
    const percent = ((heightRightInput.value - min) / (max - min)) * 100;
    heightThumbRight.style.right = 100 - percent + "%";
    heightRangeElem.style.right = 100 - percent + "%";
    heightMaxLabel.textContent = heightRightInput.value;
}

heightLeftInput.addEventListener("input", setHeightLeftValue);
heightRightInput.addEventListener("input", setHeightRightValue);

// ===== 월 급여 슬라이더 =====
const salaryLeftInput = document.getElementById("salaryLeft");
const salaryRightInput = document.getElementById("salaryRight");
const salaryFakeSlider = document.getElementById("salaryFakeSlider");
const salaryThumbLeft = salaryFakeSlider.querySelector(".thumb.left");
const salaryThumbRight = salaryFakeSlider.querySelector(".thumb.right");
const salaryRangeElem = salaryFakeSlider.querySelector(".range");
const salaryMinLabel = document.getElementById("salaryMin");
const salaryMaxLabel = document.getElementById("salaryMax");

function formatSalary(value) {
    value = parseInt(value);
    if (value >= 10000000) {
        return value / 10000000 + "억원";
    } else {
        return value / 10000 + "만원";
    }
}

function setSalaryLeftValue() {
    const min = parseInt(salaryLeftInput.min);
    const max = parseInt(salaryLeftInput.max);

    salaryLeftInput.value = Math.min(parseInt(salaryLeftInput.value), parseInt(salaryRightInput.value) - parseInt(salaryLeftInput.step));
    const percent = ((salaryLeftInput.value - min) / (max - min)) * 100;
    salaryThumbLeft.style.left = percent + "%";
    salaryRangeElem.style.left = percent + "%";
    salaryMinLabel.textContent = formatSalary(salaryLeftInput.value);
}

function setSalaryRightValue() {
    const min = parseInt(salaryRightInput.min);
    const max = parseInt(salaryRightInput.max);
    salaryRightInput.value = Math.max(parseInt(salaryRightInput.value), parseInt(salaryLeftInput.value) + parseInt(salaryRightInput.step));
    const percent = ((salaryRightInput.value - min) / (max - min)) * 100;
    salaryThumbRight.style.right = 100 - percent + "%";
    salaryRangeElem.style.right = 100 - percent + "%";
    salaryMaxLabel.textContent = formatSalary(salaryRightInput.value);
}

salaryLeftInput.addEventListener("input", setSalaryLeftValue);
salaryRightInput.addEventListener("input", setSalaryRightValue);

setAgeLeftValue();
setAgeRightValue();
setHeightLeftValue();
setHeightRightValue();
setSalaryLeftValue();
setSalaryRightValue();
