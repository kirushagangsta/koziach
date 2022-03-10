<template>
  <form action="/success" class="row ps-3 pe-3 justify-content-center">
    <input placeholder="ФИО" required class="form__input col-12 mt-4">
    <input placeholder="Номер телефона" type="tel" required class="form__input col-12 mt-4">
    <input placeholder="E-mail" type="email" required class="form__input col-12 mt-4">
    <textarea placeholder="Комментарий..." class="col-12 mt-4"></textarea>
    <div class="row justify-content-center mt-4">
      <input type="submit" value="Отправить" class="col-auto offer__button offer__button_submit">
    </div>
  </form>
</template>

<script>
export default {
  name: "FormMobile"
}
</script>

<style lang="scss" scoped>
.inputs {
  background: #FBFBFB;
  border: 1px solid #D6E4EC;
  box-sizing: border-box;
  border-radius: 24px;
}
.form__input {
  @extend .inputs;
  height: 60px;
}
textarea {
  @extend .inputs;
  resize: none;
  height: 120px;
  padding-top: 13px;
  padding-bottom: 13px;
}
.offer__button_submit {
  border: 0;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
}
</style>