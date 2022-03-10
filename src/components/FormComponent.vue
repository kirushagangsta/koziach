<template>
  <div class="col-5 pe-5">
    <div class="row">
      <div class="col-12 text-center offer__text_big pt-5">
        Оформить заявку
      </div>
    </div>
    <form action="/success" class="row justify-content-center">
      <input placeholder="ФИО" required class="form__input col-8 mt-4">
      <input placeholder="Номер телефона" type="tel" required class="form__input col-8 mt-4">
      <input placeholder="E-mail" type="email" required class="form__input col-8 mt-4">
      <textarea placeholder="Комментарий..." class="col-8 mt-4"></textarea>
      <div class="row justify-content-center mt-4">
        <input type="submit" value="Отправить" class="col-auto offer__button offer__button_submit">
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent"
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