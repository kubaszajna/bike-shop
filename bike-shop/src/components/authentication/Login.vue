<template>
    <div class="login">
        <div class="modal">
            <div class="modal-container" v-show="currentTab === 0">  
                    <ul class="modal-tabs">
                        <li v-for="(tab, index) in tabs" :key="index"
                        @click="currentTab = index"
                        :class="currentTab === index ? 'active' : ''"
                        class="link small">{{ tab }}
                        </li>
                    </ul>
                    <div class="modal-left">
                        <h1 class="modal-title">Welcome! <br>Login please.</h1>
                        <p class="modal-desc">Test user data: <span>admin@administrator.com / admin123</span></p>
                        <div class="input-block">
                            <label for="email" class="input-label">Email</label>
                            <input type="email" v-model="emailLogin" id="emailLogin" placeholder="Email">
                        </div>
                        <div class="input-block">
                            <label for="password" class="input-label">Password</label>
                            <input type="password" v-model="passwordLogin" id="passwordLogin" placeholder="Password">
                        </div>
                        <div class="modal-buttons">
                        <a href="" class="">Forgot your password?</a>
                        <button type="button" @click="login" class="link small">Login</button>
                        </div>
                        <p class="sign-up">Don't have an account? <button class="link small" @click="register">Sign up</button></p>
                    </div>
                    <div class="modal-right">
                        <img src="../../assets/images/bike-theme/bike-login-signup.jpg" alt="Dark bike">
                    </div>
                    <button class="icon-button close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                        </svg>
                    </button>
            </div>
            <div class="modal-container" v-show="currentTab === 1">
                    <ul class="modal-tabs">
                        <li v-for="(tab, index) in tabs" :key="index"
                        @click="currentTab = index"
                        :class="currentTab === index ? 'active' : ''"
                        class="link small">{{ tab }}</li>
                    </ul>
                    <div class="modal-left">
                        <h1 class="modal-title modal-title-create">Create New Account</h1>
                        <div class="input-block">
                            <label for="name" class="input-label">Your name</label>
                            <input type="text" v-model="nameSignUp" id="nameSignUp" placeholder="Your name">
                        </div>
                        <div class="input-block">
                            <label for="email" class="input-label">Email</label>
                            <input type="email" v-model="emailSignUp" id="emailSignUp" placeholder="Email">
                        </div>
                        <div class="input-block">
                            <label for="password" class="input-label">Password</label>
                            <input type="password" v-model="passwordSignUp" id="passwordSignUp" placeholder="Password">
                        </div>
                        <p class="sign-up"><button class="link small" @click="register">Sign up</button></p>
                    </div>
                    <div class="modal-right">
                        <img src="../../assets/images/bike-theme/bike-login-signup.jpg" alt="Dark bike">
                    </div>
                    <button class="icon-button close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                        </svg>
                    </button>
                
            </div>
        </div>
    </div>
</template>

<script>

import {fb,db} from '../../firebase'
// import $ from 'jquery';

export default {
    name: "Login",
    data(){
        return {
            currentTab: 0,
            tabs: ['Login', 'Sign up'],
            emailLogin: null,
            passwordLogin: null,
            nameSignUp: null,
            emailSignUp: null,
            passwordSignUp: null
        }
    },
    methods:{
        login(){
            fb.auth().signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
                .then(() => {
                    const modal = document.querySelector(".modal");
                    modal.classList.remove("is-open");
                    this.$router.replace('admin');
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        },
        register(){
            fb.auth().createUserWithEmailAndPassword(this.emailSignUp, this.passwordSignUp)
                .then((user) => {
                    const modal = document.querySelector(".modal");
                    modal.classList.remove("is-open");
                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.nameSignUp
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

                    this.$router.replace('admin');
                })
                .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }
    },
    // mounted() {
    //     const body = document.querySelector("body");
    //     const modal = document.querySelector(".modal");
    //     const modalButton = document.querySelector(".modal-button-toggle");
    //     const closeButton = document.querySelector(".close-button");

    //     const openModal = () => {
    //         modal.classList.add("is-open");
    //         body.style.overflow = "hidden";
    //     };

    //     const closeModal = () => {
    //         modal.classList.remove("is-open");
    //         body.style.overflow = "initial";
    //     };

    //     closeButton.addEventListener("click", closeModal);
    //     modalButton.addEventListener("click", openModal);
    // },
};
</script>

<style lang="scss" scoped>
.modal-tabs {
    z-index: 1;
    list-style: none;
    display: inherit;
    position: absolute;
    top: 25px;
    margin-left: 30px;
    li {
        background: white;
        cursor: pointer;
        margin-right: 15px;
        &.active {
            background: #c5c5c5;
        }
    }
}
.modal-title-create {
    margin-bottom: 20px;
}
.sign-up {
    line-height: 38px;
    text-align: left;
    .link {
        float: right;
    }
}
.modal-desc {
    span {
        font-size: 1.25rem;
        display: block;
    }
}
.input-block {
  #nameSignUp,
  #emailSignUp,
  #passwordSignUp,
  #emailLogin,
  #passwordLogin {
    line-height: 1rem;
    height: 2rem;
    margin-bottom: 0;
    -webkit-text-fill-color: #2c3e50;
  }
}
</style>
