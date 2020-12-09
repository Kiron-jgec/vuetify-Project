<template>
  <div class="home">
          <h1 class="subheading grey--text ma-3">Dashboard</h1>

<v-container class="my-5">
      <v-layout row>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              
              text
              color="grey "
              @click="shortBy('title')"
              v-bind="attrs"
              v-on="on"
              slot="activator"
            >
              <v-icon left>mdi-folder </v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Filter by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              
              text
              color="grey "
              @click="shortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-account-circle-outline</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Filter by person name</span>
        </v-tooltip>
      </v-layout>
      <v-card flat class="mt-3" v-for="(data, idx) in tableData" :key="idx">
        <v-layout  row wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div class="">{{ data.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>

            <div class="">{{ data.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>

            <div class="">{{ data.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <!-- <div class="caption grey--text">Status </div> -->

            <div class="right">
              <v-chip small :class="`${data.status} white--text caption my-2`">
                {{ data.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "Turn it",
          person: "Kiron",
          due: "21 Jan 2019",
          status: "Complated",
        },
        {
          title: "Bymond",
          person: "Kiron, Ayan",
          due: "20 Feb 2020",
          status: "Ongoing",
        },
        {
          title: "Btmond meet",
          person: "Kiron, Pritam",
          due: "30 Nov 2020",
          status: "Ongoing",
        },
        {
          title: "Octopas LMS",
          person: "Sahil",
          due: "2 Dec 2020",
          status: "Complated",
        },
        {
          title: "Mem-land",
          person: "Injamamul Hoque",
          due: "25 July 2020",
          status: "Open",
        },
      ],
    };
  },
  methods: {
    shortBy(prop) {
      this.tableData.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>


<style scoped>
/* .Complated
{
  border-left: 5px green solid;

}
.Ongoing
{
  border-left: 5px orangered solid;
  
}
.Open
{
  border-left: 5px red solid;

} */
.Complated {
  background: green !important;
}
.Ongoing {
  background: orangered !important;
}
.Open {
  background: red !important;
}
</style>
