<template>
  <div class="team">
    <h1 class="subheading grey--text ma-3">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, idx) in team" :key="idx">
          <v-card text class=" text-center ma-5" outlined>
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey" :src="person.avatar">
                <v-img
                  :src="person.avatar"
                  alt=""
                  aspect-ratio="1"
                  max-height="100"
                  max-width="100"
                />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                <strong> {{ person.name }}</strong>
              </div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message-reply-text</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Kiron", role: "Web Developer", avatar: "/images/a1.jpeg" },
        { name: "Sahil", role: "Web Designer", avatar: "/images/a2.jpeg" },
        { name: "Pritam", role: "Project Manager", avatar: "/images/a3.jpeg" },
        { name: "Ayan", role: "Backend Developer", avatar: "/images/a4.jpeg" },
        { name: "Rajesh", role: "App Developer", avatar: "/images/a5.jpeg" },
      ],
    };
  },
};
</script>
