 
<template>
  <div class="row">
    <div class="col-md">
      <v-autocomplete
        v-model="select"
        :items="items"
        item-text="nom"
        :search-input.sync="search"
        class="mx-4"
        label="Ville"
        flat
        return-object
        hide-no-data
        hide-details
        @change="getWeather(select)"
      ></v-autocomplete>
      <v-card color="grey" class="mx-auto" v-if="ready">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{weather.location.name}}, {{weather.location.localtime}}</v-list-item-title>
            
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6">{{weather.current.temperature}}°C</v-col>
            <v-col cols="6">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Vent moyen: {{weather.current.wind_speed}} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Pression atmosphérique : {{weather.current.pressure}}hpa</v-list-item-subtitle>
        </v-list-item>

        <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

        <v-list class="transparent">
          <v-list-item>
          </v-list-item>
        </v-list>
        <v-list-item-subtitle class="text-left">Température: {{ weather.current.temperature }}°</v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">Humidité: {{ weather.current.humidity }}°</v-list-item-subtitle>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text>Full Report</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script src="./Weather.js"/>