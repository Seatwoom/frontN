document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("result").textContent = "";
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("error", "valid"));

  // зберігання fields і regex
  const fields = {
    pib: {
      value: document.getElementById("pib").value,
      regex: /^[А-ЯЇІЄҐ][а-яїієґ']{1,6} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    },
    idCard: {
      value: document.getElementById("idCard").value,
      regex: /^[А-ЯІЇЄҐ]{2} №\d{6}$/,
    },
    faculty: {
      value: document.getElementById("faculty").value,
      regex: /^[А-ЯІЇЄҐ]{2,4}$/,
    },
    dob: {
      value: document.getElementById("dob").value,
      regex: /^\d{2}\.\d{2}\.\d{4}$/,
    },
    address: {
      value: document.getElementById("address").value,
      regex: /^м\. [А-ЯІЇЄҐа-яієїґ']{2,}$/,
    },
  };

  let isValid = true;

  // перевірка fields
  for (let key in fields) {
    let field = fields[key];
    let inputElement = document.getElementById(key);

    if (!field.regex.test(field.value)) {
      inputElement.classList.add("error");
      isValid = false;
    } else {
      inputElement.classList.add("valid");
    }
  }

  // res
  if (isValid) {
    document.getElementById(
      "result"
    ).textContent = `ПІБ: ${fields.pib.value}\nID-картка: ${fields.idCard.value}\nФакультет: ${fields.faculty.value}\nДата народж.: ${fields.dob.value}\nАдреса: ${fields.address.value}`;
  } else {
    document.getElementById("result").textContent =
      "Є помилки в введених даних!";
  }
});
