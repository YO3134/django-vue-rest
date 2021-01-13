<template>
    <div id="login-page">
        <GlobalHeader/>
        <GlobalMessage/>

        <main class="container">
            <p class="h5 mb-4">ログイン</p>
            <b-form @submit.prevent="submitLogin">
                <div class="row form-group">
                    <label class="col-sm-3 col-form-label">ユーザー名</label>
                    <div class="col-sm-8">
                        <b-form-input type="text" v-model="form.username" required/>
                    </div>
                </div>
                <div class="row form-group">
                    <label class="col-sm-3 col-form-label">パスワード</label>
                    <div class="col-sm-3">
                        <b-form-input type="password" v-model="form.password" required/>
                    </div>
                </div>
                <div class="row text-center mt-5">
                    <div class="col-sm-12">
                        <b-button type="submit" variant="primary">ログイン</b-button>     
                    </div>     
                </div>     
            </b-form>
        </main>
    </div>
</template>