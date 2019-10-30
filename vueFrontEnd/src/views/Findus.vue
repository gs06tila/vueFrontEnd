<template>
  <div class="findus">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="mt-4 mb-4 storeInfo">Find Us!</h1>
          <hr>
          <b-media class="find">
            <b-list-group cols="3" v-for="store in stores"
                          :key="store.id">
              <b-list-group-item @click="view(store)">
                <div class="mb-4" sm="6">
                  <h4 class="mt-2 storeInfo">{{store.name}}</h4>
                  <hr>
                  <p class="mt-4 mb-4">Open Houers</p>
                  <p class="mt-4 mb-4">{{ store.adress }}, {{store.city}}</p>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-media>
        </b-col>
        <b-col cols="8">
          <transition name="bounce">
            <div class="page" v-if="isCurrent">
              <h1 class="mt-4 mb-4 storeInfo">{{storeInfo.city}}</h1>
              <hr>
              <b-container class="pt-4">
                <b-media right-align>
                  <h2 class="storeInfo">{{storeInfo.name}}</h2>
                  <h5 class="storeInfo">{{storeInfo.adress}}</h5>
                  <h6 class="mt-4 mb-4 storeInfo">öppettider</h6>
                  <p class="mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in</p>
                  <l-map
                    class="mt-4 mb-4"
                    style="height: 400px; width: 100%;"
                    :zoom="zoom"
                    :center="center"
                    @update:zoom="zoomUpdated"
                    @update:bounds="boundsUpdated"
                  >
                    <l-tile-layer :url="url"></l-tile-layer>
                    <l-marker :lat-lng="center"></l-marker>
                  </l-map>
                </b-media>
              </b-container>
            </div>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
export default {
  name: 'Findus',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [52.529562, 13.413047],
      bounds: null,
      stores: [],
      storeInfo: null,
      isCurrent: false,
      map: null
    }
  },
  beforeRouteEnter (to, from, next) {
    fetch(`http://192.168.0.15:8080/api/stores`)
      .then(response => {
        return response.json()
      })
      .then(stores => {
        next(vm => {
          vm.setData(stores)
        })
      })
  },
  mounted () {
    /* this.map = LMap('mapid').setView([51.505, -0.09], 13)

    LMap.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/compyright">OpenStreetMap</a>contributors'
    }).addTo(this.map) */
  },
  methods: {
    setData (stores) {
      this.stores = stores._embedded.stores
    },
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      this.center = center
    },
    boundsUpdated (bounds) {
      this.bounds = bounds
    },
    view (store) {
      this.storeInfo = store
      this.center = [store.longitude, store.lat]
      console.log(this.center)
      this.isCurrent = true
    }
  }
}
</script>

<style scoped>
  #mapid {
    height: 180px;
  }
  .storeInfo {
    text-align: center;
  }

  .find{
    cursor: pointer;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
