<template>
  <div
    class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4"
  >
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 font-normal" @click="sort('user_id')">User</th>
          <th class="px-4 py-2 font-normal" @click="sort('league_id')">
            League
          </th>
          <th class="px-4 py-2 font-normal" @click="sort('roster_id')">
            Roster
          </th>
          <th class="px-4 py-2 font-normal" @click="sort('wins')">Wins</th>
          <th class="px-4 py-2 font-normal" @click="sort('losses')">Losses</th>
          <th class="px-4 py-2 font-normal" @click="sort('fpts')">
            Points For
          </th>
          <th class="px-4 py-2 font-normal" @click="sort('fpts_against')">
            Points Against
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userLeague in sortedUserLeague" :key="userLeague">
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
import _ from "lodash";

export default {
  name: "UserLeague",
  computed: {
    sortedUserLeague() {
      let sortedData = _.cloneDeep(this.userLeagues);
      return _.orderBy(sortedData, [this.currentColumn], [this.orderType]);
    }
  },
  data() {
    return {
      userLeagues: [],
      currentColumn: "user_id",
      orderType: "desc"
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
  },
  methods: {
    sort(column) {
      if (column !== this.currentColumn) {
        this.currentColumn = column;
      } else {
        if (this.orderType === "desc") {
          this.orderType = "asc";
        } else {
          this.orderType = "desc";
        }
      }
    }
  }
};
</script>
