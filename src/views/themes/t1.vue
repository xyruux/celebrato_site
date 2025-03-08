<template> 
    <div>  
        <!-- <v-overlay
      :model-value="overlay"  :style="'background-color:' +$store.state.form_theme?.demo?.colors?.[0]"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay> -->
   
    <!-- section 1 --> 

        <!-- background  --> 
            <template v-if="$vuetify.display.mobile">
                <v-img v-if="$store.state.form_theme?.demo?.background?.[0] == '1'" :src="$store.state.form_theme?.demo?.background?.[1]" 
                :style="{  opacity: $store.state.form_theme?.demo?.background?.[2],  filter: `grayscale(${ $store.state.form_theme?.demo?.background?.[3] }%)` } "
                style="background-size: cover;  position: fixed;   top: 0;  left: 0;  width: 100vw;  height: 100vh; " cover></v-img>
            </template>
            <template v-else>
                <v-img v-if="$store.state.form_theme?.demo?.background?.[0] == '1'" :src="$store.state.form_theme?.demo?.background?.[1]" :style="{  opacity: $store.state.form_theme?.demo?.background?.[2],  filter: `grayscale(${ $store.state.form_theme?.demo?.background?.[3] }%)` } "  style="position: fixed; width: 100%; " cover></v-img>
            </template>
            <v-card v-if="$store.state.form_theme?.demo?.background?.[0] == '2'" :color="$store.state.form_theme?.demo?.background?.[1]"  style="height: 100rem; position: fixed; width: 100%; " ></v-card>
            <template v-if="$store.state.form_theme?.id != null" >
     
     
        <!--  Slides with text and image  -->
            <v-card v-if="$store.state.form_theme?.id != null"  class="rounded-0" color="transparent" > 
                <v-card  :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'"  height="100%" flat class="carousel-vcard pa-4 rounded-0" >
                    <!-- text1 -->
                    <v-row v-if="$store.state.form_theme.demo?.text1[0]" no-gutters class="pattaya-regular" :style="!$vuetify.display.mobile?'margin-top: 13%;':'margin-top: 33%;'" style="color: white;" ><v-col  class="text-center animate__animated animate__fadeInDown"><span :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text1[2] * 0.7:$store.state.form_theme.demo?.text1[2])+'px',  fontFamily: $store.state.form_theme.demo?.text1[1] }">{{ $store.state.form_theme.demo?.text1[0]  }}</span></v-col></v-row>
                    <!-- text2 -->
                    <v-row v-if="$store.state.form_theme.demo?.text2[0]" no-gutters class="life-savers-regular" style=" color: white;" ><v-col class="text-center animate__animated animate__fadeInDown"  ><span :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text2[2] * 0.5:$store.state.form_theme.demo?.text2[2]) +'px',  fontFamily: $store.state.form_theme.demo?.text2[1] }">{{ $store.state.form_theme.demo?.text2[0]  }}</span></v-col></v-row>  
                    <!-- img -->
                    <v-row no-gutters><v-col cols="12" ><v-img :src="f2" width="600" height="auto" style="" class="mx-auto   animate__animated animate__fadeIn"></v-img></v-col></v-row>
                    <!-- text3 -->
                    <v-row  no-gutters class="life-savers-regular" style=" color: white;" v-if="$store.state.form_theme.demo?.text3[0]"><v-col   class="text-center animate__animated animate__slideInUp"  ><span :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text3[2] * 0.7:$store.state.form_theme.demo?.text3[2])+'px',  fontFamily: $store.state.form_theme.demo?.text3[1] }">{{ $store.state.form_theme.demo?.text3[0]  }}</span></v-col></v-row> 
                    <!-- text4 -->
                    <v-row  no-gutters class="life-savers-regular" style=" color: white;" v-if="$store.state.form_theme.demo?.text4[0]"><v-col   class="text-center animate__animated animate__slideInDown"  ><span :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text4[2] * 0.7:$store.state.form_theme.demo?.text4[2])+'px',  fontFamily: $store.state.form_theme.demo?.text4[1] }">{{ $store.state.form_theme.demo?.text4[0]  }}</span></v-col></v-row> 
                </v-card>  
                  <!-- slides -->
                   <template v-if="$store.state.form_theme.demo?.collage.length > 0">
                        <template v-if="$vuetify.display.mobile">
                            <v-carousel hide-delimiter-background hide-delimiters :cycle="$store.state.form_theme.demo?.collage.length > 0" :show-arrows="false"  >
                            <v-carousel-item v-for="(v,k) in $store.state.form_theme.demo?.collage" :key="k" >
                                <v-img style="background-size: cover;   top: 0; left: 0; width: 100vw; min-height: 80vh; " :src="v" class="animate__animated animate__fadeIn"  cover position="top"></v-img>
                            </v-carousel-item> 
                        </v-carousel>
                        </template>
                        <template v-else>
                        <v-carousel hide-delimiter-background hide-delimiters :cycle="$store.state.form_theme.demo?.collage.length > 0" :show-arrows="false"  height="60rem" >
                            <v-carousel-item v-for="(v,k) in $store.state.form_theme.demo?.collage" :key="k" >
                                <v-img :src="v" class="animate__animated animate__fadeIn"  cover position="top"></v-img>
                            </v-carousel-item> 
                        </v-carousel>
                        </template>
                    </template>
            </v-card>
        
    <!-- section 2 -->
                <v-card v-if="$store.state.form_theme?.id != null" flat class="rounded-0 text-center" color="transparent">
                    <br><br>   
                    <v-lazy :min-height="!$vuetify.display.mobile?250:100" :options="{'threshold': 1}"  transition="fade-transition ">
                        <v-row no-gutters>
                            <!-- text5 -->
                            <v-col cols="12" class="life-savers-regular animate__animated  animate__fadeInUp" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text5[2] * 0.7:$store.state.form_theme.demo?.text5[2])+'px',  fontFamily: $store.state.form_theme.demo?.text5[1], color:  $store.state.form_theme?.demo?.colors?.[1] }" > {{ $store.state.form_theme.demo?.text5[0] }}</v-col>
                            <v-col cols="12"><v-img :src="f1" width="300"  class="mx-auto mt-auto animate__animated animate__fadeInUp"></v-img></v-col>   
                            <!-- text6 -->
                            <v-col cols="12"  class="pattaya-regular  animate__animated  animate__fadeInUp" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text6[2] * 0.7:$store.state.form_theme.demo?.text6[2])+'px',  fontFamily: $store.state.form_theme.demo?.text6[1], color:  $store.state.form_theme?.demo?.colors?.[1] }">{{ $store.state.form_theme.demo?.text6[0] }}</v-col>
                        </v-row> 
                    </v-lazy> 
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="12">
                            <v-lazy v-if="$store.state.form_theme.demo?.others?.video" :min-height="!$vuetify.display.mobile?300:100" :options="{'threshold': 1}"  transition="fade-transition ">
                                    <v-row> 
                                    <!-- video -->
                                    <v-col v-if="$store.state.form_theme.demo?.video?.[0]" cols="12" class="text-center  animate__animated  animate__fadeInUp">
                                        <video 
                                        class="mx-auto rounded-xl "
                                        :width="($vuetify.display.mobile? $store.state.form_theme.demo?.video[1] + 20: $store.state.form_theme.demo?.video[1]) +'%'" 
                                        :height="($vuetify.display.mobile? $store.state.form_theme.demo?.video[2] * 0.5:  $store.state.form_theme.demo?.video[2])+'px'" 
                                        autoplay controls loop playsinline 
                                        style="object-fit: cover; display: block;">
                                        <source :src="$store.state.form_theme.demo?.video?.[0]" type="video/mp4">
                                        Your browser does not support the video tag.
                                        </video>
                                        <!-- video if show link -->
                                        <v-btn v-if="$store.state.form_theme.demo?.video[3]" :href="$store.state.form_theme.demo?.video[0]" target="_blank" class="mt-4 rounded-xl" variant="tonal" :color=" $store.state.form_theme?.demo?.colors?.[1]"> Video Link </v-btn>
                                    </v-col> 
                                </v-row>
                            </v-lazy>

                            <v-lazy :min-height="!$vuetify.display.mobile?400:100" :options="{'threshold': 1}"  >
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-col cols="10"  >
                                <br v-if="!$vuetify.display.mobile">
                                <br v-if="!$vuetify.display.mobile">
                                <!-- tumbnails image -->
                                    <v-row>
                                        <v-spacer></v-spacer> 
                                            <v-col cols="12" md="6" v-if="$store.state.form_theme.demo?.spotify?.[0]">
                                                <span  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text6[2] * 0.7:$store.state.form_theme.demo?.text6[2])+'px',  fontFamily: $store.state.form_theme.demo?.text6[1], color:  $store.state.form_theme?.demo?.colors?.[1] }">Our Playlist</span>
                                                <iframe style="border-radius:20px;" :height="$store.state.form_theme.demo?.spotify?.[2]+'%'" class="animate__animated  animate__fadeInUp" :width="$store.state.form_theme.demo?.spotify?.[1]+'%'" :src="$store.state.form_theme.demo?.spotify?.[0]"   frameBorder="0" allowfullscreen  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                            </v-col>
                                            <v-col cols="12" :md="$store.state.form_theme.demo?.others?.playlist?6:12" v-if="$store.state.form_theme.demo?.tiles[0].length > 0">
                                                <v-row >
                                                <template  v-if="!$vuetify.display.mobile" >
                                                    <template  v-for="(v,k) in $store.state.form_theme.demo?.tiles?.[0]" :key="k">
                                                        <v-col  :class="' animate__animated  animate__flipInX animate__delay-1.'+k+'s'" :cols="12/$store.state.form_theme.demo?.tiles?.[4]" >
                                                            <a :href="v" target="_blank" > <v-hover v-slot:default="{ isHovering, props }" >  <v-img  v-bind="props" class="rounded-xl"  :class="isHovering?'elevation-4 animate__animated animate__pulse animate__infinite':''" cover :height="$store.state.form_theme.demo?.tiles?.[2]+'px'" :width="$store.state.form_theme.demo?.tiles?.[1]+'%'" :src="v"></v-img> </v-hover> </a> 
                                                        </v-col>
                                                    </template>
                                                </template>
                                                <template  v-else >
                                                    <v-col  :md="$store.state.form_theme.demo?.others?.playlist?6:3" class="d-flex animate__animated pa-0 animate__flipInX"  style="overflow-x: auto;">
                                                        <v-img :href="v" v-for="(v,k) in $store.state.form_theme.demo?.tiles?.[0]" :key="k" :class="' animate__animated  animate__flipInX animate__delay-'+k+'s'"  cover :height="($vuetify.display.mobile? $store.state.form_theme.demo?.tiles[2] * 0.7:  $store.state.form_theme.demo?.tiles[2])+'px'" :width="($vuetify.display.mobile? $store.state.form_theme.demo?.tiles[1] + -20: $store.state.form_theme.demo?.tiles[1]) +'%'" class="rounded-lg mr-2" :src="v"></v-img> 
                                                    </v-col> 
                                                </template>
                                            </v-row>
                                            </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                    <!-- tumbnaiks gallery -->
                                    <v-row >
                                        <v-col cols="12"> 
                                            <v-btn v-if="$store.state.form_theme.demo?.tiles?.[3]" size="large" class="animate__animated animate__fadeInDown" :color=" $store.state.form_theme?.demo?.colors?.[1]">
                                                    Photo Gallery
                                            </v-btn>
                                            <v-img  :src="f1" width="800"  class="mx-auto mt-auto    animate__animated animate__fadeIn"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-spacer></v-spacer>
                            </v-row>  
                            </v-lazy>
                        </v-col> 
                        <v-spacer></v-spacer>
                    </v-row> 

                </v-card>

            <v-card  :height="!$vuetify.display.mobile?100:50" class="pa-4" color="transparent" flat  >
                <v-row><v-col class="text-center"><div class=" broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"><template  v-if="!$vuetify.display.mobile"> <span v-for="i in 8" :key="i" style="margin-right: 50px;" :style="{  fontSize: '20px', fontFamily: $store.state.form_theme.demo?.text2[1] }">{{ $store.state.form_theme.demo?.text2[0]  }}</span></template> </div></v-col></v-row>  
            </v-card>
 
    <!-- section 3 -->
    
            <v-card v-if="$store.state.form_theme?.id != null" flat  class=" pa-4 rounded-0 text-center " color="transparent" >    
                    <v-lazy :min-height="!$vuetify.display.mobile?230:100" :options="{'threshold': 1}" transition="fade-transition ">
                         <v-row dense>
                            <v-col cols="12" class="animate__animated animate__fadeInDown"  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text7[2] * 0.7:$store.state.form_theme.demo?.text7[2])+'px',  fontFamily: $store.state.form_theme.demo?.text7[1], color:  $store.state.form_theme?.demo?.colors?.[1] }">{{ $store.state.form_theme.demo?.text7[0] }}
                                <v-img :src="f1" width="400"  class="mx-auto mt-auto"></v-img>
                            </v-col> 
                        </v-row>
                    </v-lazy>
                    <v-lazy :min-height="!$vuetify.display.mobile?200:100" :options="{'threshold': 1}" transition="fade-transition "> 
                        <v-row dense  > 
                            <v-spacer></v-spacer>
                            <v-col cols="12" md="8" >
                                <v-row> 
                                    <v-spacer></v-spacer> 
                                    <v-col class="animate__animated animate__flipInX" cols="6" md="2" v-for="(v,k) in $store.state.form_theme.demo?.timeline" :key="k">
                                        <v-card :class="' animate__animated  animate__bounceIn'" :color="$store.state.form_theme?.demo?.colors?.[1]" width="100%" height="100px" class="text-center pa-4 rounded-xl text-white">
                                            <h1 v-if="!$vuetify.display.mobile" class="life-savers-regular">{{ v.time }}</h1> 
                                            <h2 v-else class="life-savers-regular">{{ v.time }}</h2>
                                            <span class="life-savers-regular"><b>{{v.name}}</b></span>
                                        </v-card>
                                    </v-col>  
                                    <v-spacer></v-spacer> 
                                </v-row> 
                            </v-col> 
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-lazy>
 
            <!-- Venue --> 
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="10"> 
                                <v-row> 
                                    <v-spacer></v-spacer>
                                        <template v-for="(v,k) in $store.state.form_theme.demo?.venue[1]" :key="k">
                                            <v-col cols="12"   :md="12/$store.state.form_theme.demo?.venue[1].length" >
                                                <v-lazy :min-height="!$vuetify.display.mobile?200:100"  :options="{'threshold': 1}" transition="fade-transition "> 
                                                    <v-card :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'"  class="pa-4  animate__animated  animate__jackInTheBox rounded-xl">
                                                        <h4 :style="{ fontSize: ($vuetify.display.mobile?'30px':'50px'),  fontFamily: $store.state.form_theme.demo?.venue[0], color:  $store.state.form_theme?.demo?.colors?.[1] }">{{ v[0] }}</h4>
                                                        <hr class="text-white my-4">
                                                        <v-row > 
                                                            <v-col cols="12"  class="text-center">
                                                                <h2 :style="{ fontSize: ($vuetify.display.mobile?'20px':'30px'),  fontFamily: $store.state.form_theme.demo?.venue[0]}"><b>{{ v[1] }}</b></h2><br>
                                                                <v-img class="rounded-lg animate__animated animate__jello" :height="$vuetify.display.mobile?150:200" cover :src="v[4]"></v-img> 
                                                                <span :style="{ fontSize: ($vuetify.display.mobile?'15px':'20px'),  fontFamily: $store.state.form_theme.demo?.venue[0]}" >{{ v[2] }}</span>  
                                                            </v-col>
                                                            <v-col>
                                                                <v-btn :block="$vuetify.display.mobile" size="large" :href="v[3]" class="rounded-xl" target="_blank"   :color="$store.state.form_theme?.demo?.colors?.[1]">
                                                                Google Map <v-icon end >mdi-map-marker-radius</v-icon>
                                                                </v-btn>
                                                            </v-col>
                                                        </v-row> 
                                                    </v-card>
                                                </v-lazy>
                                            </v-col>
                                        </template>
                                    <v-spacer></v-spacer>
                                </v-row>  
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                   <v-img :src="f4" width="600"    class="mx-auto mt-auto   animate__animated animate__fadeIn"></v-img>
            </v-card> 

            <v-card  :height="!$vuetify.display.mobile?90:100" class="pa-4" :color="$store.state.form_theme?.demo?.colors?.[0]" flat  >
                <div class="marquee" >
                          <span  class="life-savers-regular"   style="margin-right: 100px; font-size: 30px; color: white;" v-for="i in 20" :key="i">{{this.$store.state.form_theme.demo?.text2[0]}} </span>
                      </div><br >   
                </v-card>
 
    <!-- section 4 -->
  
            <br v-if="!$vuetify.display.mobile">
            <br v-if="!$vuetify.display.mobile">
            <br v-if="!$vuetify.display.mobile">
            <br >
            <v-card v-if="$store.state.form_theme?.id != null" flat color="transparent" class="ma-2 text-center">
                <v-lazy :min-height="!$vuetify.display.mobile?200:100"  :options="{'threshold':1}" transition="fade-transition "> 
                    <v-row no-gutters>
                        <v-col cols="12" class="animate__animated animate__fadeInUp" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text8?.[2] * 0.7:$store.state.form_theme.demo?.text8?.[2])+'px',  fontFamily:$store.state.form_theme.demo?.text8?.[1], color:  $store.state.form_theme?.demo?.colors?.[3] }" >
                            {{ $store.state.form_theme.demo?.text8?.[0] }}
                            <v-img :src="f1" :width="!$vuetify.display.mobile?400:300" class="mx-auto mt-auto animate__animated animate__fadeInUp"></v-img>
                        </v-col>
                    </v-row> 
                </v-lazy>

                <v-row no-gutters>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="11">
                            <v-row :style="{fontFamily:$store.state.form_theme.demo?.entourage['font'][0]}">  
                                <v-col cols="12" md="12" class="text-center">

                                    <!-- <v-lazy :min-height="!$vuetify.display.mobile?150:110"  :options="{'threshold':1}" transition="fade-transition "> 
                                        <v-row class=" animate__animated animate__zoomIn">
                                            <v-spacer></v-spacer>
                                            <v-col cols="12" md="5" >
                                                <b :style="$vuetify.display.mobile?'font-size: 25px':'font-size: 35px'">{{$store.state.form_theme?.demo?.entourage.bride}}</b><br>
                                                <b :style="($vuetify.display.mobile?'font-size: 20px;':'font-size: 30px;') + 'color: '+$store.state.form_theme?.demo?.colors?.[1]" >Bride</b> 
                                            </v-col>
                                            <v-col cols="12" md="5" >
                                                <b :style="$vuetify.display.mobile?'font-size: 25px':'font-size: 35px'">{{$store.state.form_theme?.demo?.entourage.groom}}</b><br>
                                                <b :style="($vuetify.display.mobile?'font-size: 20px;':'font-size: 30px;') + 'color: '+$store.state.form_theme?.demo?.colors?.[1]" >Groom</b> 
                                            </v-col>  
                                            <v-spacer></v-spacer>
                                        </v-row> 
                                    </v-lazy> -->

                               

                                    <v-lazy :min-height="!$vuetify.display.mobile?150:110"  :options="{'threshold':1}" transition="fade-transition "> 
                                        <v-row class=" animate__animated animate__fadeInUp">
                                            <!-- brides -->
                                             <v-spacer></v-spacer>
                                            <v-col cols="12" md="5">
                                                <b style="font-size: 30px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Parents of the Bride</b><br>
                                                <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Father: </b>{{$store.state.form_theme?.demo?.entourage.bride_father}}</b><br>
                                                <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Mother: </b>{{$store.state.form_theme?.demo?.entourage.bride_mother}}</b> 
                                            </v-col>
                                            <!-- groom -->
                                            <v-col cols="12" md="5">
                                                <b style="font-size: 30px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Parents of the Groom</b><br>
                                                <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Father: </b>{{$store.state.form_theme?.demo?.entourage.groom_father}}</b><br>
                                                <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Mother: </b>{{$store.state.form_theme?.demo?.entourage.groom_mother}}</b> 
                                            </v-col>  
                                            <v-spacer></v-spacer>
                                        </v-row> 
                                        <v-row>
                                            <v-col cols="12">
                                                <div class=" broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"> </div>
                                            </v-col>
                                        </v-row>
                                    </v-lazy>
                                </v-col>
                            </v-row>     
                            <v-row>
                                <v-col cols="12"><div class="broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"></div></v-col>
                            </v-row>
                            <v-row :style="{fontFamily:$store.state.form_theme.demo?.entourage['font'][0]}">
                                <v-col cols="12" > 
                                                <v-row no-gutters> 
                                                    <v-col cols="12" md="6" > 
                                                    <b style="font-size: 30px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"> Principal Sponsors</b><br>
                                                    <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.sponsor_male" :key="k"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"></b> {{ v }} & {{ $store.state.form_theme?.demo?.entourage.sponsor_female[k] }}<br> </b>
                                                    <!-- <br>
                                                    <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Female Principal Sponsors</b><br>
                                                    <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.sponsor_female" :key="k"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"></b> {{ v }}<br> </b> -->
                                                </v-col>  
                                                <v-col cols="12" md="6"> 
                                                    <b style="font-size: 30px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"> Secondary Sponsors</b><br>
                                                    <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Candle Sponsors</b><br>
                                                    <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.candle_sponsors" :key="k"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"></b> {{ v }}<br> </b>
                                                    <br>
                                                    <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Veil Sponsors</b><br>
                                                    <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.viel_sponsors" :key="k"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"></b> {{ v }}<br> </b>
                                                    <br>
                                                    <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Cord Sponsors</b><br>
                                                    <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.cord_sponsors" :key="k"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]"></b> {{ v }}<br> </b>
                                                </v-col>   
                                            </v-row>
                                    </v-col>
                                <v-col cols="12">
                                    <v-row>
                                        <v-col cols="12"><div class="broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"></div></v-col>
                                    </v-row>
                                    <v-lazy :min-height="!$vuetify.display.mobile?150:110"  :options="{'threshold':1}" transition="fade-transition "> 
                                <v-row class=" animate__animated animate__fadeInUp" :style="{fontFamily:$store.state.form_theme.demo?.entourage['font'][0]}">
                                    <v-col cols="12" md="6"> 
                                        <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Grooms Men</b> 
                                        <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.groomsmen" :key="k"><div>{{ v }}</div></b><br>
                                        <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Best Man:</b><br> {{$store.state.form_theme?.demo?.entourage.best_man}}</b><br>
                                    </v-col>
                                    <v-col cols="12" md="6"  >
                                        <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Brides Maids</b><br>
                                        <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.bridesmaids" :key="k"><div>{{ v }}</div></b><br>
                                        <b style="font-size: 20px"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Maid of Honor:</b><br> {{$store.state.form_theme?.demo?.entourage.maid_of_honor}}</b> <br>  <br> 
                                    </v-col> 
                                </v-row> 
                                <v-row>
                                    <v-col cols="12"><div class="broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"></div></v-col>
                                </v-row>
                            
                            </v-lazy>
                                </v-col>
                            </v-row>
                            <v-row  class=" animate__animated animate__fadeInUp"  :style="{fontFamily:$store.state.form_theme.demo?.entourage['font'][0]}">
                                  <v-col cols="12" >
                                        <b style="font-size: 30px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Ceremonial Roles</b><br>
                                        <b style="font-size: 20px" :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Flower Girl/s</b><br>
                                        <b style="font-size: 20px" v-for="(v,k) in $store.state.form_theme?.demo?.entourage.flower_girl" :key="k">{{ v }}<br></b> 
                                        <br>
                                        <b style="font-size: 20px;"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Ring Bearer: </b>{{$store.state.form_theme?.demo?.entourage.ring_bearer}}</b><br>
                                        <b style="font-size: 20px;"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Coin Bearer: </b>{{$store.state.form_theme?.demo?.entourage.coin_bearer}}</b><br>
                                        <b style="font-size: 20px;"><b :style="'color: '+$store.state.form_theme?.demo?.colors?.[1]">Bible Bearer: </b>{{$store.state.form_theme?.demo?.entourage.bible_bearer}}</b><br>
                                    </v-col>
                                  
                            </v-row>
                            
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row> 
            </v-card> 
        
            <v-card :height="!$vuetify.display.mobile?100:50" class="pa-4" color="transparent" flat>
                <v-row><v-col class="text-center"><div class=" broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"><template  v-if="!$vuetify.display.mobile"> <span v-for="i in 8" :key="i" style="margin-right: 50px;" :style="{  fontSize: '20px', fontFamily: $store.state.form_theme.demo?.text2[1] }">{{ $store.state.form_theme.demo?.text2[0]  }}</span></template> </div></v-col></v-row>  
            </v-card>
 
    <!-- section 5 -->
        
            <v-card flat color="transparent" class=" rounded-xl ma-2 text-center">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="10">
                        <v-lazy :min-height="!$vuetify.display.mobile?200:100"  :options="{'threshold':0.8}" transition="fade-transition "> 
                            <v-row dense>
                            <v-col class="animate__animated animate__fadeInUp" cols="12" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text9?.[2] * 0.7:$store.state.form_theme.demo?.text9?.[2])+'px', fontFamily: $store.state.form_theme.demo?.text9?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }">{{ $store.state.form_theme.demo?.text9?.[0] }}
                                <v-img :src="f1" :width="!$vuetify.display.mobile?400:300" :height="!$vuetify.display.mobile?100:50" style="top: -20px;"  class="mx-auto mt-auto   animate__animated animate__fadeInUp"></v-img>
                            </v-col> 
                            </v-row> 
                        </v-lazy>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>

                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="10"> 
                       <v-row> 
                            <v-spacer></v-spacer>
                            <v-col cols="12" md="5">
                                <v-lazy :min-height="!$vuetify.display.mobile?200:100"  :options="{'threshold':0.8}" transition="fade-transition "> 
                                    <v-card :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'"  height="100%"  class="pa-6 pb-8 animate__animated  animate__flipInY rounded-xl">
                                        <v-row>
                                            <v-col cols="12">
                                                <v-img height="200" :src="d1" ></v-img>
                                                <span :style="{ fontSize: '20px',  fontFamily: $store.state.form_theme.demo?.dresscode?.['font'],color: $store.state.form_theme?.demo?.colors?.[1] }">
                                                    <abbr v-for="(v,k) in $store.state.form_theme.demo?.dresscode?.attire" :key="k" >
                                                        <abbr v-html="v[0]+'<br>'"></abbr>
                                                        <abbr v-html="v[1]+'<br>'"></abbr>
                                                    </abbr>
                                                </span>
                                            </v-col> 
                                        </v-row>   
                                    </v-card>
                                </v-lazy> 
                            </v-col> 
                            <v-col cols="12" md="5">
                                <v-lazy :min-height="!$vuetify.display.mobile?200:100"  :options="{'threshold':0.8}" transition="fade-transition "  height="100%"> 
                                    <v-card :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'"  height="100%" class="pa-6 pb-8 animate__animated  animate__flipInY rounded-xl">
                                    <v-row style="margin-top: 10%">
                                        <v-col cols="12">
                                            <span :style="{ fontSize: '20px',  fontFamily: $store.state.form_theme.demo?.dresscode?.['font'], color: $store.state.form_theme?.demo?.colors?.[1]}">
                                                <v-btn :class="' animate__animated  animate__pulse animate__infinite animate__delay-'+k+'s  '" style="margin-right: -25px;" v-for="(v,k) in $store.state.form_theme.demo?.dresscode?.colors" :key="k" rounded="circle"  :color="v" size="100"></v-btn>
                                                <br>
                                                <br>
                                               <b>Picture yourself in these stunning shades!</b> 
                                            </span>
                                        </v-col> 
                                    </v-row>   
                                </v-card>
                                </v-lazy>
                            </v-col> 
                            <v-spacer></v-spacer>
                        </v-row>  
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card> 
            
            <br><br>
            <v-card flat color="transparent" class=" rounded-xl ma-2">
                <v-row class=" text-center">
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="10">
                        <v-lazy :min-height="!$vuetify.display.mobile?120:50"  :options="{'threshold':0.8}" transition="fade-transition "> 
                            <v-row dense>
                                <v-col class="animate__animated animate__fadeInUp" cols="12" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text10?.[2] * 0.7:$store.state.form_theme.demo?.text10?.[2])+'px', fontFamily: $store.state.form_theme.demo?.text10?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }">{{ $store.state.form_theme.demo?.text10?.[0] }}
                                </v-col> 
                            </v-row> 
                        </v-lazy>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>

                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="10"> 
                        <v-lazy :min-height="!$vuetify.display.mobile?120:50"  :options="{'threshold':0.8}" transition="fade-transition "> 
                            <v-row> 
                                <v-spacer></v-spacer>
                            <v-col cols="12" md="4" v-for="(v,k) in $store.state.form_theme.demo?.otherdetails?.portion" :key="k">
                                <v-card :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'"  height="100%"  class="pa-6 pb-8 animate__animated  animate__zoomIn rounded-xl">
                                    <v-row>
                                        <v-col cols="12" class=" text-center">
                                            <span :style="{ fontSize: '20px',  fontFamily: $store.state.form_theme.demo?.otherdetails?.['font'],color: $store.state.form_theme?.demo?.colors?.[1]   }">
                                                <abbr  >
                                                    <abbr v-html="v[0]+'<br>'"></abbr>
                                                    <abbr v-html="v[1]+'<br>'"></abbr>
                                                </abbr>
                                            </span>
                                        </v-col> 
                                    </v-row>   
                                </v-card>
                            </v-col>  
                            <v-spacer></v-spacer>
                        </v-row> 
                        </v-lazy>

                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card> 

    <!-- section 6 -->
        
        <v-card :height="!$vuetify.display.mobile?100:50" class="pa-4" color="transparent" flat>
            <v-row><v-col class="text-center"><div class=" broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"><template  v-if="!$vuetify.display.mobile"> <span v-for="i in 8" :key="i" style="margin-right: 50px;" :style="{  fontSize: '20px', fontFamily: $store.state.form_theme.demo?.text2[1] }">{{ $store.state.form_theme.demo?.text2[0]  }}</span></template> </div></v-col></v-row>  
        </v-card>

        

        <v-card flat color="transparent"   class="py-4 rounded-xl ma-2" >
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="11" :md="$store.state.form_theme.demo?.others?.faq?5:6"  v-if="$store.state.form_theme.demo?.others?.questions"> 
                    <v-row>
                        <v-col class="animate__animated animate__fadeInUp" cols="12" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text11?.[2] * 0.7:$store.state.form_theme.demo?.text11?.[2])+'px', fontFamily: $store.state.form_theme.demo?.text11?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }" >
                            <a  v-html=" $store.state.form_theme.demo?.text11?.[0]"></a> 
                        </v-col> 
                        <v-col cols="12" style="font-size: 20px;" :style="{fontFamily: $store.state.form_theme.demo?.text11?.[1]}">
                            <span>Full name: </span>
                            <v-text-field hide-details rounded="lg" style="background-color: lightgrey;"  variant="outlined" ></v-text-field>
                        </v-col>
                        <v-col cols="12" style="font-size: 20px;" :style="{fontFamily: $store.state.form_theme.demo?.text11?.[1]}">
                            <span>Message: </span>
                            <v-textarea rows="4" hide-details rounded="lg" style="background-color: lightgrey;" variant="outlined" ></v-textarea>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn size="large" rounded="xl" :color="$store.state.form_theme?.demo?.colors?.[2]">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-col>    
                <v-spacer  v-if="$store.state.form_theme.demo?.others?.faq || $store.state.form_theme.demo?.others?.questions"></v-spacer>

                <v-col cols="12"  :md="$store.state.form_theme.demo?.others?.questions?5:6" v-if="$store.state.form_theme.demo?.others?.faq"> 
                        <v-row>
                            <v-col :class="!$vuetify.display.mobile?'text-center':'text-center'" class="animate__animated animate__fadeInUp" cols="12" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7:$store.state.form_theme.demo?.text12?.[2])+'px', fontFamily: $store.state.form_theme.demo?.text12?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }" >
                                <a  v-html=" $store.state.form_theme.demo?.text12?.[0]"></a> 
                            </v-col> 
                        </v-row>
                        <v-row>
                            <v-spacer v-if="!$vuetify.display.mobile"></v-spacer>
                            <v-col cols="12 " md="12">
                                <v-expansion-panels class="my-4" variant="inset" :color="$store.state.form_theme?.demo?.colors?.[2]">
                                    <v-expansion-panel class="my-1 rounded-lg animate__animated animate__fadeInUp " :class="' animate__animated  animate__flipInX animate__delay-'+k+'s'" 
                                        v-for="(v,k) in  $store.state.form_theme.demo?.faq"
                                        :key="k"
                                        :title="v.question"
                                        :text="v.answer"
                                    ></v-expansion-panel>
                                    </v-expansion-panels>
                            </v-col> 
                    </v-row>
                </v-col>    
                <v-spacer v-if="!$vuetify.display.mobile"></v-spacer>
        </v-row>

       </v-card>

       <v-card v-if="$store.state.form_theme.demo?.others?.faq || $store.state.form_theme.demo?.others?.questions" :height="!$vuetify.display.mobile?100:50" class="pa-4" color="transparent" flat>
            <v-row><v-col class="text-center"><div class=" broken-line-horizontal" :style="'color: '+ $store.state.form_theme?.demo?.colors?.[2]"><template  v-if="!$vuetify.display.mobile"> <span v-for="i in 8" :key="i" style="margin-right: 50px;" :style="{  fontSize: '20px', fontFamily: $store.state.form_theme.demo?.text2[1] }">{{ $store.state.form_theme.demo?.text2[0]  }}</span></template> </div></v-col></v-row>  
        </v-card>

        <v-card flat color="transparent"  class=" rounded-xl ma-2" v-if="$store.state.form_theme.demo?.others?.messages ">
            <v-row >
                <v-spacer></v-spacer>
                <v-col cols="12" md="10" > 
                        <v-carousel v-if="$store.state.form_theme?.messages?.length > 0"  cycle hide-delimiters   height="15rem" >
                            <v-carousel-item v-for="(chunk, index) in ratingChunks" :key="index">
                            <v-row >
                                <v-col v-for="(rating, i) in chunk" :key="i" cols="12" sm="6" md="3" >
                                <v-card  class="pa-3 rounded-xl" outlined>
                                    <template v-slot:prepend> 
                                        <v-btn icon class="mx-4"><v-icon>mdi-account</v-icon></v-btn>
                                    </template> 
                                    <template v-slot:text> 
                                        <abbr  v-html="rating.message"></abbr>
                                    </template> 
                                    <template v-slot:title> 
                                        <abbr  v-html="rating.name"></abbr>
                                    </template> 
                                </v-card>
                                </v-col>
                            </v-row>
                            </v-carousel-item>
                        </v-carousel>
                        <span v-else>
                            <v-row class="text-center">
                                <v-col :class="!$vuetify.display.mobile?'text-center':'text-center'" class="animate__animated animate__fadeInUp" cols="12" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7:$store.state.form_theme.demo?.text12?.[2])+'px', fontFamily: $store.state.form_theme.demo?.text12?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }" >
                                    Countdown
                                </v-col> 
                                <v-col  cols="12" class="text-center animate__animated animate__fadeInUp" :style="{  fontFamily: $store.state.form_theme.demo?.text12?.[1], color:  $store.state.form_theme?.demo?.colors?.[1] }" >
                                    <v-row class="text-center">
                                        <v-spacer></v-spacer>
                                        <v-col cols="3" md="2">
                                           <span  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7: ($store.state.form_theme.demo?.text12?.[2] + 40 ) ) +'px'}"> {{ formattedTime?.[0] }} </span>
                                           <br v-if="$vuetify.display.mobile"> <span>DD</span>
                                        </v-col>
                                        <v-col cols="3" md="2"> 
                                            <span  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7: ($store.state.form_theme.demo?.text12?.[2] + 40 ) ) +'px'}"> {{ formattedTime?.[1] }} </span>
                                            <br v-if="$vuetify.display.mobile"><span>HH</span>
                                        </v-col>
                                        <v-col cols="3" md="2"> 
                                            <span  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7: ($store.state.form_theme.demo?.text12?.[2] + 40 ) ) +'px'}"> {{ formattedTime?.[2] }} </span>
                                           <br v-if="$vuetify.display.mobile"> <span>MM</span>
                                        </v-col>
                                        <v-col cols="3"  md="2">
                                            <span  :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme.demo?.text12?.[2] * 0.7: ($store.state.form_theme.demo?.text12?.[2] + 40 ) ) +'px'}"> {{ formattedTime?.[3] }} </span>
                                            <br v-if="$vuetify.display.mobile"><span>SS</span>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                </v-col> 
                                <v-col>

                                </v-col>

                            </v-row> 
                        </span>
                </v-col>
                <v-spacer></v-spacer>
            </v-row> 
            

        </v-card>

        </template> 


 

        <editorDialog/>

 
            <v-fab 
                :style="$vuetify.display.mobile?' bottom: 10%; right: 22%;  ':' bottom: 10%; right: 6%;'"
                style="position: fixed; z-index: 99999;"
                :color="'primary'"
                size="x-large"
                icon>
            
            <v-icon>{{ fab_btn ? 'mdi-close' : 'mdi-flower' }}</v-icon>
            <v-speed-dial v-model="fab_btn" activator="parent">
                                      
                <v-btn key="1"  class="rounded-xl" size="large" :color="$store.state.form_theme?.demo?.colors?.[1]" >
                    <v-icon start>mdi-plus-box</v-icon> RSVP
                </v-btn>
                <v-btn key="2"  class="rounded-xl" size="large" :color="$store.state.form_theme?.demo?.colors?.[1]" >
                    <v-icon start>mdi-image-area-close</v-icon> Photo Gallery
                </v-btn>
                <v-btn key="3"  class="rounded-xl" size="large" :color="$store.state.form_theme?.demo?.colors?.[1]" >
                    <v-icon start>mdi-comment</v-icon> Add Comments
                </v-btn>   
                </v-speed-dial>
            </v-fab>
    </div>
</template> 
  

<style scoped>
/* splash screen */
.splash-screen {
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  text-align: center;
}
 

/* cover photo */
.pattaya-regular {
  font-family: "Pattaya", serif; 
  font-weight: 400;
  font-style: normal; 
}
.delius-regular {
  font-family: "Delius", serif; 
  font-weight: 400;
  font-style: normal; 
}
.life-savers-regular {
  font-family: "Life Savers", serif;
  font-weight: 400;
  font-style: normal;
}
.carousel-vcard {
  position: absolute;
  width: 100%; 
  box-shadow: none; 
  z-index: 99999;
}
/* cover photo */


/* save the date */
.save_the_date {
    margin-top: 80px;
    font-family: "Delius", serif;
}
.time_line { 
    font-family: "Delius", serif;
    font-size: 50px;
    color:  rgba(135, 86, 94, 0.786); 
}
/* save the date */
#backlink{
    display: none !important;
}
.broken-line-horizontal {
    width: 100%; /* Adjust width as needed */
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      black 0px,
      black 5px,
      transparent 5px,
      transparent 10px
    );
  }


  .marquee {
  display: inline-block;
  white-space: nowrap; 
  width: 100%;
  padding: 10px;
  animation: marquee 50s linear infinite;
  transform: translateX(0); /* Initial state: show the text instantly */
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
import { defineComponent } from 'vue'  
import editorDialog from '../admin/setup/editor.vue' 
import axios from 'axios'; 
export default defineComponent({ 
    components: {
        editorDialog 
    },
    computed: {
        ratingChunks() {
            if(this.$store.state.form_theme?.messages?.length > 0){
                return this.chunkArray(this.$store.state.form_theme.messages, 4);
            }
            return []; 
        }
    },
    data() {
          return {
            overlay: true,
            targetDate: new Date('2025-12-31T23:59:59'),
            formattedTime: this.calculateTimeLeft(),
            photo_dialog: false,
            fab_btn: false,
            f1: import.meta.env.VITE_API_URL+'/elements/f1_brown.png',
            f2: import.meta.env.VITE_API_URL+'/elements/f2_white.png',
            f3: import.meta.env.VITE_API_URL+'/elements/f1_white.png',
            f4: import.meta.env.VITE_API_URL+'/elements/f2_brown.png',
            d1: import.meta.env.VITE_API_URL+'/images/dress.png',
            image1: import.meta.env.VITE_API_URL + '/images/flower_landscape1.png',
            image_collage1: import.meta.env.VITE_API_URL + '/images/flower_box2.png',
            form: [], 
            marque: [],
          };
      },
    watch: {
        '$store.state.form_theme.id'(val){
            setTimeout(() => {
            // this.overlay = false;
            }, 3000);
        }
    },
    created(){
        if(  this.$route.query?.t ){
            window.scrollTo(0,0);
            this.getImages();
            this.interval = setInterval(this.updateTimer, 3600000);
        }
       
    }, 
    mounted(){
        this.updateTimer();
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {

        calculateTimeLeft() { 
            try {
            const targetDate = new Date(this.$store.state.form_theme.demo?.text6[0]).getTime();
            const now = Date.now();
            const diff = targetDate - now;  
            const days = Math.floor(diff / 86400000);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            return [String(days).padStart(2, '0'), String(hours).padStart(2, '0'), String(minutes).padStart(2, '0'), String(seconds).padStart(2, '0')];
            } catch (error) {
                
            }
        },
        updateTimer() {
            this.formattedTime = this.calculateTimeLeft();
        },
        chunkArray(arr: any, size: any) {
            return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
            );
        }, 
        async getImages(){
            try { 
                const r = await axios.get('/api/admin-project',{params:{action: 'get_project',  t: this.$route.query.t , id: this.$route.query?.id }}); // Replace with your actual API endpoint
                this.$store.state.form_theme = r.data; 
                // }
            } catch (error) {
                this.$router.push({name: "home"})
            }    
        },

 
        async loadFonts(fonts: any) {
            const apiKey = "AIzaSyAplhjbqOAIVBBnqgMevrF4PK96xJKJ5Gw"; // Replace with your API key
            const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;

            try {
                const response = await fetch(url);
                const text = await response.text();
                const data = JSON.parse(text);

                for (const font of data.items) {
                const fontName = font.family.replace(/ /g, "+");
                if (fonts.includes(font.family)) {
                    const cssUrl = `https://fonts.googleapis.com/css2?family=${fontName}:wght@400&display=swap`;

                    const cssResponse = await fetch(cssUrl);
                    const cssText = await cssResponse.text();

                    // Extract .woff2 URLs from the CSS response
                    const woff2Urls = [...cssText.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map(match => match[1]);

                    if (woff2Urls.length === 0) {
                    console.warn(`No .woff2 files found for ${font.family}`);
                    continue;
                    }

                    for (const fontUrl of woff2Urls) {
                    const fontResponse = await fetch(fontUrl);
                    if (!fontResponse.ok) {
                        console.warn(`Failed to download ${fontUrl}`);
                        continue;
                    }

                    const fontBlob = await fontResponse.blob();
                    const fontFile = new Blob([fontBlob], { type: "font/woff2" });
                    const fontFileName = `${font.family.replace(/ /g, "_")}.woff2`;

                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(fontFile);
                    a.download = fontFileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    }
                }
                }
            } catch (error) {
                console.error("Error fetching or downloading fonts:", error);
            }
        },
 


    }
})
</script> 