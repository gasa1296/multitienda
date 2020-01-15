<template>
  <b-container>
    <h1 class="mt-4 mb-3">Quienes Somos</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-row>
      <b-col lg='6'>
        <b-img src="http://placehold.it/750x450" fluid-grow alt="img"></b-img>
      </b-col>
      <b-col lg='6'>
        <h2>About Modern Business</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "conocenos",
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          to: '/'
        },
        {
          text: 'Conocenos',
          active: true
        }
      ]
    }
  }
}
</script>
