$(function () {
  var validate = (function () {
    function form(selector) {
      let input = $(selector).find("input");
      let check = true;

      input.map(function (index, value) {
        if ($(value).hasClass("email")) {
          if (email($(value).val())) {
            boolean(input.eq(index), true);
          } else {
            check = false;
            boolean(input.eq(index), check);
          }
        }
      });

      return check;
    };

    function boolean(input, value) {
      value ? input.closest(".form-group").removeClass("error") : input.closest(".form-group").addClass("error");
    };

    function email(string) {
      let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      return (reg.test(string) ? true : false);
    };

    function required(string) {
      return (string.length > 0 ? true : false);
    };

    return {
      form,
      email,
      required,
    };
  })();

  $("#form").on("submit", function (e) {
    e.preventDefault();
    if (validate.form($(this))) {
      alert("Success!");
    }
  });
});