<template>
  <div
    class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4"
  >
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 font-normal">User</th>
          <th class="px-4 py-2 font-normal">League</th>
          <th class="px-4 py-2 font-normal">Roster</th>
          <th class="px-4 py-2 font-normal">Wins</th>
          <th class="px-4 py-2 font-normal">Losses</th>
          <th class="px-4 py-2 font-normal">Points For</th>
          <th class="px-4 py-2 font-normal">Points Against</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userLeague in userLeagues" :key="userLeague.id">
          <td class="border px-4 py-2">{{ userLeague.user_id }}</td>
          <td class="border px-4 py-2 font-hairline">
            {{ userLeague.league_id }}
          </td>
          <td class="border px-4 py-2">{{ userLeague.roster_id }}</td>
          <td class="border px-4 py-2">{{ userLeague.wins }}</td>
          <td class="border px-4 py-2">{{ userLeague.losses }}</td>
          <td class="border px-4 py-2">{{ userLeague.fpts }}</td>
          <td class="border px-4 py-2">{{ userLeague.fpts_against }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "UserLeague",
  data() {
    return {
      userLeagues: []
    };
  },
  apollo: {
    UserLeague: {
      query: gql`
        query {
          UserLeague {
            user_id
            league_id
            roster_id
            wins
            losses
            fpts
            fpts_against
          }
        }
      `,
      result({ data }) {
        this.userLeagues = data.UserLeague;
      }
    }
  }
};
</script>
