<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link tag="li" class="nav-item" to="/" exact>
                        <a class="nav-link">Главная</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/list-of-users" exact>
                        <a class="nav-link">Список пользователей</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/list-of-users/create" exact>
                        <a class="nav-link">Добавить нового пользователя</a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <div id="app">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'

    export default {
        name: 'app'
    }
</script>
