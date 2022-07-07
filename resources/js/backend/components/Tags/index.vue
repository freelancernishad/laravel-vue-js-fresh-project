<template>
<div>
 <table id="datatable" >
    <thead>
        <tr>
            <th>Sl</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Name</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Name</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Name</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Name</td>
        </tr>
    </tbody>
 </table>
    </div>
</template>

<script>


export default {

  mounted () {

    $('#datatable').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'print'
        ]
    } );


  },
  data(){
    return {

    }
  },
  methods: {
    }
}
</script>
