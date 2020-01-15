<template>
  <b-container>
    <h1>Contactanos</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-row>
      <b-col lg="8">
        <b-embed type="embed" aspect="4by3">
          <source src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed">
        </b-embed>
      </b-col>
      <b-col lg="4">
        <b-row>
          <b-col>
            <h3>Detalles de Contacto</h3>
            <p>Ujap, 4to piso</p>
            <p><abbr title="Phone">Telefono</abbr>:(+58) xxx-xxx-xxxx</p>
            <p><abbr title="Email">Correo</abbr>:<a href="mailto:name@example.com">g@g.com</a></p>
            <p><abbr title="Hours">Horas</abbr>: Lunes a Viernes 1:00 p.m a 1:01 p.m</p>
          </b-col>
        </b-row>
          <b-form @submit.prevent="">
            <b-form-group label="Nombre Completo" label-for="name">
              <b-form-input id="name" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group label="Numero de Telefono" label-for="phone">
              <b-form-input  id="phone" type="tel" required></b-form-input>
            </b-form-group>
            <b-form-group label="Correo" label-for="email">
              <b-form-input id="email" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Mensaje" label-for="message">
              <b-form-textarea id="message" max-rows="6" required></b-form-textarea>
            </b-form-group>
            <b-form-group>
              <b-button variant="outline-primary" type="submit" id="submit" value="submit">Enviar</b-button>
            </b-form-group>
          </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "contactanos",
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          to: '/'
        },
        {
          text: 'Contactanos',
          active: true
        }
      ]
    }
  }
}
</script>

<style>

</style>
