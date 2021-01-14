<template>
    <div id="home-page">
        <GlobalHeader/>
        <GlobalMessage/>

        <main class="container">
            <p class="h5 mb-4">ホーム</p>
            <b-form @submit.prevent="submitSave">
                <div class="row form-group">
                    <label class="col-sm-3 col-form-label">タイトル</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="form.book.title">
                    </div>
                </div>
                <div class="row form-group">
                    <label class="col-sm-3 col-form-label">価格</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" v-model="form.book.price">
                    </div>
                </div>
                <div class="row text-center mt-5">
                    <div class="col-sm-12">
                        <b-button type="submit" variant="primary">{{ isCreated ? '更新' : '登録'}}</b-button>
                    </div>
                </div>
            </b-form>
        </main>
    </div>
</template>