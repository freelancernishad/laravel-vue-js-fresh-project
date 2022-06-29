<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
        <component :is="$route.meta.layout || 'div'" >
            <router-view />
          </component>

    </div>

    <script src="{{ asset('js/frontend.js') }}"></script>

<script>


if ("{{ Auth::user() }}") {

    if(!User.loggedIn()){
        axios.post('/logout').then(()=>{
            // window.location.href = '/'
        })
    }


}else{
    User.loggedOut()
   
}

</script>

</body>
</html>
