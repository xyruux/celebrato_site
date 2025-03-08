<template>
  <div> 

      <!-- cover -->
       <hr id="home" style="position: absolute; top: -10%;">
      <v-row style="margin-top: 2%;"  >
          <v-spacer></v-spacer>
          <v-col cols="12" md="10">
            <v-card class="rounded-xl text-left elevation-4 mx-1"  color="#333333">
              <v-img alt="Cover Image" :src="coverImage" :height="$vuetify.display.mobile?'15rem':'20rem'" :class="$vuetify.display.mobile?'pa-4':'pa-6'" cover>
                  <span :style="$vuetify.display.mobile? 'font-size: 30px; ':'font-size: 60px; '" style="transform-origin: left bottom; color: #fbeb04;" class="poiret-one-regular ">Your Event, <br v-if="$vuetify.display.mobile">  Your Way  <br>  <small>—Digitally Perfect.      </small> 
                  <br>     <v-icon v-for="i in 5" :key="i" size="40" :class="'animate__animated animate__fadeInDown animate__delay-'+i+'s '" color="yellow" style="-webkit-text-stroke: 2px black;">mdi-star</v-icon>
                  </span><br>
                   <!-- <span :style="$vuetify.display.mobile? 'font-size: 10px; ':''" class="mogra-regular">Let us invite you with love to this memorable and easily accessible invitation."</span> -->
                <br>  <br v-if="!$vuetify.display.mobile">  <br v-if="!$vuetify.display.mobile">  <br >
                <v-btn aria-label="Learn More" class="rounded-xl animate__animated animate__pulse animate__infinite mogra-regular" :size="$vuetify.display.mobile?'large':'x-large'"  color="#fbeb04">Learn More</v-btn>
              </v-img> 
            </v-card>
          </v-col> 
          <v-spacer></v-spacer>
      </v-row>
      <br v-if="!$vuetify.display.mobile">
      <br>
      <v-row style="margin-top: 4%;" >
        <v-col cols="12">
                <v-card flat height="50" class="text-white rounded-0" color="#333333">
                    <div class="marquee" >
                        <span class="mogra-regular" v-for="(word, index) in words" :key="index">{{ word }} </span>
                    </div>
                </v-card>
            </v-col> 
      </v-row>  
       <v-card  flat id="invitations"> 
          <!-- products -->
          <v-row  style="margin-top: 5%;">
            <v-spacer></v-spacer>
            <v-col cols="11" md="10">
              <span class="poiret-one-regular" ><span :style="$vuetify.display.mobile?'font-size: 40px;':'font-size: 60px;'" style="color: #333333;"  >We cater services such as</span></span><br>
              <hr>
              <br>
              <v-row>
                <v-col cols="12" md="4" v-for="(v,k) in demo" :key="k"> 
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card   
                    :class="$vuetify.display.mobile?'pa-1':''"
                      v-bind="props"
                    :elevation="isHovering ? 24 : 2" class="mogra-regular rounded-lg text-center animate__animated animate__fadeInDown"  color="#333333"  >
                      <v-img alt="Cover Product Image"  style="top: 0" cover max-height="15rem" class="rounded-lg" :src="v?.cover">      
                        <v-expand-transition>
                        <div
                          v-if="isHovering"
                          class="d-flex  v-card--reveal"
                          style="height: 100%;"
                        >
                          <v-img class="pa-4" alt="Cover Product Image sub"  cover :src="menu_spark"  >
                          </v-img>
                        </div>
                      </v-expand-transition></v-img> 
                          <hr class="ma-2">
                          <h3 style="color:#fbeb04;">{{ v.name }} </h3> 
                          <v-card color="transparent" flat style=" max-height: 10rem; min-height: 10rem; overflow-y: auto;" class="pa-4 text-left text-white">
                            <!-- {{v.short_description }} -->
                            <h5  v-for="(vv,kk) in JSON.parse(v?.short_description)" :key="kk"><v-icon size="18" start>mdi-check-circle-outline</v-icon> {{ vv }} </h5> 
                          </v-card>
                          <v-btn aria-label="View More" block color="primary" class=" animate__animated animate__pulse animate__infinite" @click="$router.push({name: 'products', query:{ type: v.category }})"><v-icon start>mdi-eye</v-icon>View More</v-btn>
                    </v-card>
                    </v-hover>
                </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
          </v-row> 
          
          <br v-if="$vuetify.display.mobile">
          <!-- about us -->
            <v-row style="margin-top: 5%;" id="about">
              <v-col cols="12" class="text-center">   <span class="poiret-one-regular" ><span :style="$vuetify.display.mobile?'font-size: 40px;':'font-size: 60px;'" style="color: #333333;"  >About Celebrato</span></span><br>
              </v-col>
            </v-row>
            <v-row style="margin-top: 2%;"> 
              <v-spacer></v-spacer>
              <v-col cols="12" md="3">    
                <v-img alt="Celebrato Logo"  :height="$vuetify.display.mobile?'100':'auto'" width="100%" :src="iconImage" class="animate__animated animate__jello animate__infinite animate__slower"> 
                  <v-img alt="Celebrato Logo"  width="100%" height="200" style="margin-top: 60px;margin-left: 20px" :src="menu_spark"  >
                  </v-img>
                </v-img>
              </v-col> 
              <v-col cols="12" md="6"   style="margin-top: 2%;" class="mogra-regular text-center">
                <p :style="$vuetify.display.mobile?'font-size: 14px;':'font-size: 20px;'" style="   color: black;">
                    At <strong>Celebrato</strong>, we craft beautiful, customized digital invitations for your most special moments. Whether it's a wedding, birthday, or any celebration, we design invitations that perfectly match your style and vision.
                    <br><br>
                    Our team takes care of everything—from elegant designs to seamless delivery—so you can focus on celebrating. With <strong>Celebrato</strong>, you get professionally made invitations that leave a lasting impression.
                    <br><br> 
                    Let’s make your event unforgettable. Contact us today to get started!
                </p>
                </v-col>
              <v-spacer></v-spacer>
            </v-row> 
      </v-card>
      <br id="contact">
      <v-card  style="margin-top: 5%;" class="pa-4 mx-4 rounded-xl" color="#333333" > 
        
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" md="4">
              <v-row>
                <v-col cols="12"><componentContactUs/></v-col>
                <v-col cols="12">
                    <hr class="my-4">
                    <b>Our Social Media/s</b>
                    <v-row dense>
                      <v-col cols="12" md="4" class="text-center">
                        <v-btn aria-label="Facebook" variant="text" icon href="https://www.facebook.com/celebrato.co" target="_blank" > <v-icon  :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04"  >mdi-facebook</v-icon></v-btn>
                        <v-btn aria-label="Instagram" variant="text" icon href="https://www.instagram.com/celebrato.co" target="_blank" > <v-icon :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04" >mdi-instagram</v-icon></v-btn> 
                        <v-btn aria-label="Phone" variant="text" icon @click="dialog_info = !dialog_info" > <v-icon :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04" >mdi-phone</v-icon></v-btn> 
                        <!-- <v-btn aria-label="Save" variant="text" icon @click="dialog_info = !dialog_info" > <v-icon :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04" >mdi-marker-radius</v-icon></v-btn>  -->
                      </v-col> 
                    </v-row>  
                  </v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="6">
                <v-row no-gutters>
                  <v-col cols="12" class="text-center">   <span class="poiret-one-regular" ><span :style="$vuetify.display.mobile?'font-size: 40px;':'font-size: 60px;'" style="   color: #fbeb04;"  >FAQ</span></span><br>
                  </v-col>
                  <v-col>
                    <v-expansion-panels   class="my-2 rounded-0 "  color="#333333" flat :variant="$vuetify.display.mobile?'default':'popout'">
                      <v-expansion-panel
                        v-for="(v,k) in faq"
                        :key="k" 
                        title="Item"
                      >
                      <template v-slot:title>
                       <h4 class="mogra-regular">{{ v.question  }}</h4> 
                      </template>
                      <template v-slot:text>
                        <div v-html="v.answer"></div>
                      </template>
                    </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
          </v-row> 
      </v-card>

      <v-card  style="margin-top: 5%;" class="pa-4 rounded-xl" >  
        <v-row  id="about">
              <v-col cols="12" class="text-center">   
                <span class="poiret-one-regular" ><span style="font-size: 60px; color: #333333;"  >Feedback and Comments</span></span><br>
                <span class="mogra-regular">Our hearts are full of joy and happiness when you rate us!</span>
              </v-col>
            </v-row>
        <v-carousel style="margin-top: 5%; max-height: 20rem;" cycle hide-delimiters  class=" ">
          <v-carousel-item v-for="(chunk, index) in ratingChunks" :key="index">
            <v-row >
              <v-col v-for="(rating, i) in chunk" :key="i" cols="12" sm="6" md="3">
                <v-card color="#333333"  class="pa-3 rounded-xl" outlined>
                  <v-card-title> 
                    <span class="ml-3 ">{{ rating.name }}</span> <br>
                    <small class="ml-3 mogra-regular" style="color:#fbeb04;"> (Custom Digital {{  rating.category }} Invitation)</small> 
                  </v-card-title>
                  <v-card-text class="ma-0 pa-4">
                    <v-rating v-model="rating.stars" dense hide-details readonly class="pa-0 ma-0" color="amber"></v-rating>
                    <p class="mt-2">"{{ rating.comment }}"</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-card>

      <v-dialog width="30%" :fullscreen="$vuetify.display.mobile" v-model="dialog_info">
        <v-card  class="pa-4" color="#333333">
          <div class="d-flex">  <h2>Contact Information/s: </h2>
            <v-spacer></v-spacer>
          </div>
          <hr class="my-4"> 
          <v-row>
            <v-col> 
              <h4>CP #: {{env.VITE_CONTACT}} <small>(Smart)</small></h4>
              <h4>Tel #: {{env.VITE_CONTACT}}</h4>
              <h4>Email: {{env.VITE_EMAIL}}</h4>
              <h4>Address: {{env.VITE_ADDRESS}}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn aria-label="Ok" @click="dialog_info = !dialog_info" block color="primary">Ok</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>

  </div>
</template>
<style scoped>

.half-circle {
  width: 100%;
  height: 30rem; /* Adjust as needed */
  background: #333333; /* Change color as needed */
  position: relative; 
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 0 0 100%  100%;
}
 

.marquee {
display: inline-block;
white-space: nowrap;
width: 100%;
padding: 10px;
animation: marquee 50s linear infinite;
transform: translateX(0); /* Initial state: show the text instantly */
}

.marquee span {
padding-right: 50px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

@keyframes marquee { 
0% {
  transform: translateX(-100%); /* Hide the text just after loading */
}
100% {
  transform: translateX(100%);
} 
}
</style>
<script lang="ts">
import { useHead } from '@vueuse/head';
useHead({
  title: import.meta.env.VITE_APP_TITLE + ' - Digital Invitations, RSVP & Web Development',
}); 
import axios from 'axios' 
import componentContactUs from './contact_us.vue'
import { defineComponent } from 'vue'   
export default defineComponent({ 
  components: {
    componentContactUs
  },
  data() {
        return {
          logo: import.meta.env.VITE_API_URL + '/images/welcome.png',
          env: import.meta.env,
          dialog_info: false,
          loading: false,


          words: [
          'Elegant ✨', '18th Birthday 🎉', 'Reunion 🤝', 'Romantic 💖', 'Whimsical 🦄', 
            'Wedding 💍', 'Joyous 😊', 'Bash 🎈', 'Anniversary 💑', 'Timeless ⏳', 
            'Magical 🪄', 'Graduation 🎓', 'Vibrant 🌟', 'Baby Shower 👶', 'Wonderland 🏰', 
            'Classic 🎩', 'Retirement 🎉', 'Charming 💕', 'Blissful 🌸', 'Holiday Party 🎄', 
            'Serene 🌿'
          ],
          demo: [],
          coverImage: 'https://celebrato-225407182.imgix.net/cover.png', 
          //  import.meta.env.VITE_API_URL + '/images/cover.png',
          iconImage:  import.meta.env.VITE_API_URL + '/images/icon.png',
          menu_spark:  import.meta.env.VITE_API_URL + '/images/menu_spark.gif',
          faq: [
              {
                "question": "What is Celebrato?",
                "answer": "<p>Celebrato is an online service that creates and hosts beautiful digital invitations for weddings, birthdays, and other special events.</p>"
              },
              {
                "question": "Can I have my invitation on my own domain?",
                "answer": "<p>Yes! You can choose to host your invitation on <strong>your own domain</strong> (e.g., <code>yourname.com</code>) or on <strong>our platform</strong> (e.g., <code>celebrato.com/your-event</code>).</p>"
              },
              {
                "question": "Do I need to design the invitation myself?",
                "answer": "<p>No, our team will design the invitation for you. Just provide your event details, and we’ll handle the rest!</p>"
              },
              {
                "question": "What’s the difference between hosting on my domain vs. Celebrato’s site?",
                "answer": "<ul><li><strong>Your Own Domain:</strong> Full control, personalized branding, and a custom link (e.g., <code>myevent.com</code>).</li><li><strong>Celebrato’s Site:</strong> Quick and easy, with a unique link under our domain (e.g., <code>celebrato.com/myevent</code>).</li></ul>"
              },
              {
                "question": "How long does it take to set up my digital invitation?",
                "answer": "<ul><li><strong>Hosting on Celebrato’s site:</strong> 24-48 hours</li><li><strong>Hosting on your own domain:</strong> 2-5 days (depending on domain setup)</li></ul>"
              },
              {
                "question": "Can I edit the invitation after it's published?",
                "answer": "<p>Yes! You can request edits, and we’ll update your invitation accordingly.</p>"
              },
              {
                "question": "Can guests RSVP through the invitation?",
                "answer": "<p>Yes! We offer an <strong>RSVP feature</strong> where guests can confirm their attendance online.</p>"
              },
              {
                "question": "Do you provide animated or video invitations?",
                "answer": "<p>Yes, we offer <strong>animated and video invitations</strong> to make your event even more special.</p>"
              },
              {
                "question": "How do I share my digital invitation?",
                "answer": "<p>You can share it via <strong>email, social media, messaging apps, or even print a QR code</strong> for easy access.</p>"
              },
              {
                "question": "What are the payment options?",
                "answer": "<p>We accept <strong>credit/debit cards, PayPal, and other secure payment methods</strong>.</p>"
              }
          ],
          ratings: [
            { icon: 'mdi-account', name: 'Mark Villanueva', comment: 'Sobrang elegant ng design, tamang-tama sa dream wedding namin!', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Angela Ramos', comment: 'Ang dali gamitin, tapos ang classy pa ng dating. Perfect sa debut ni bunso!', stars: 4, category: 'Birthday' },
            { icon: 'mdi-account', name: 'Ronald Cruz', comment: 'Napakaganda! Talagang swak na swak sa kasal namin.', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Eunice Bautista', comment: 'Highly recommended! Ang ganda ng invitation, ang daming natuwa.', stars: 4, category: 'Reunion' },
            { icon: 'mdi-account', name: 'Geraldine Santos', comment: 'Ang elegant ng invitations, parang mamahalin!', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Christian Mendoza', comment: 'Super sulit! Mura pero ang ganda ng quality.', stars: 4, category: 'Reunion' },
            { icon: 'mdi-account', name: 'Jasmine De Guzman', comment: 'Saktong-sakto sa birthday ng anak ko, sobrang cute ng design!', stars: 5, category: 'Birthday' },
            { icon: 'mdi-account', name: 'Patrick Navarro', comment: 'Nakakabilib yung pagka-detailed, ang daming nagandahan.', stars: 4, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Lara Fernandez', comment: 'Very stylish at ang dali i-customize. Super happy ako!', stars: 5, category: 'Reunion' },
            { icon: 'mdi-account', name: 'Dexter Salazar', comment: 'Gustong-gusto ko yung templates, ang ganda ng designs.', stars: 4, category: 'Birthday' },
            { icon: 'mdi-account', name: 'Melissa Robles', comment: 'Ang bilis ng process tapos ang elegant ng outcome.', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Vincent Pascual', comment: 'Pulido ang gawa at maganda ang serbisyo. Satisfied ako!', stars: 4, category: 'Reunion' },
            { icon: 'mdi-account', name: 'Althea Gomez', comment: 'Sobrang ganda ng invitations! Nagustuhan ng guests namin.', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Julius Tan', comment: 'Isa sa pinakamagandang invitations na nakita ko.', stars: 4, category: 'Birthday' },
            { icon: 'mdi-account', name: 'Rochelle Ignacio', comment: 'Napakahusay ng quality, hindi tinipid ang design.', stars: 5, category: 'Wedding' },
            { icon: 'mdi-account', name: 'Francis Villamor', comment: 'Babalik ulit ako next event, sobrang nagustuhan ng family ko!', stars: 4, category: 'Reunion' }
          ],
       
        };
    },
    created(){
          this.getTemplates()
    },
    mounted() {
  // Scroll on page load if there's a hash in the URL
  if (this.$route.hash) {
    this.$nextTick(() => {
      this.scrollToSection(this.$route.hash.substring(1));
    });
  }else{
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
  }
},
computed: {
  ratingChunks() {
    return this.chunkArray(this.ratings, 4);
  }
},
  watch: {
    '$route.hash'(newHash) { 
      if (newHash) {
        this.scrollToSection(newHash.substring(1)); // Remove "#" before passing ID
      }
    }
  },
  methods: {
    chunkArray(arr: any, size: any) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );
    },
    scrollToSection(id: string) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async getTemplates(){
      try { 
        const response = await axios.get('/api/guest',{params:{action: 'products' }}); 
        this.demo = response.data;  
      } catch (error) {}
    },
 
   

  }
})
</script>
