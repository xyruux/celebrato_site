<template>
    <div v-if="($route.name as string)">
        <v-row v-if="!['template-editor','invitation','preview'].includes($route.name as string)" no-gutters :class="{ loader: true, fadeout: !isLoading }" justify="center"
        style="position: fixed; width: 100%; height: 100vh; z-index: 10000; background-color: rgba(51, 51, 51, 0.8)">

        <div class="envelope "  >
        <!-- <div class="flap animate__animated animate__slideOutUp "></div>
        <div class="bottom  animate__animated animate__slideOutDown "></div> -->
         <v-img :src="logo"  contain :width="$vuetify.display.mobile ?300:'400'" style="margin-top: 20%; z-index: -1" class="mx-auto animate__animated animate__jackInTheBox"></v-img>
        </div>
        </v-row>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue' 
export default defineComponent({
    name: "LoadingScreen",
    props: ["isLoading"] , 
    data() {
    return {
        isOpen: false,
      logo: import.meta.env.VITE_API_URL + '/images/logo.png'
    };
  }, 
  
 
})

</script>

 
<style scoped> 

.envelope-wrapper {
    position: absolute;
    width: 300px;
    height: 200px;
}
.envelope {
    position: relative;
    width: 100%;
    height: 100%;
}
.flap {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    background-color: #b5651d; 
}
.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: #d98b5f; 
}
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s ease-in-out;
    font-size: 18px;
    color: #333;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.envelope.open .flap {
    transform: rotateX(-120deg);
}
.envelope.open .bottom {
    transform: translateY(1050px);
}
.envelope.open .content {
    opacity: 1;
}

#logo {
    animation: breathing 10s ease-out infinite;
}

.fadeout {
    animation: fadeout 2s forwards;
}

@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@-webkit-keyframes breathing {
    0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    25% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
}

@keyframes breathing {
    0% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
}
</style>