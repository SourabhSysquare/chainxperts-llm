const apiConfig = [
    {
        name: "balance",
        desc: "balance remaining in user's account",
        endpoints: "/fin-manager/balance-mode"
    },
    {
        name: "goal",
        desc: "get user goals",
        endpoints: "/fin-manager/goal"
    },
    {
        name: "future expenses",
        desc: "upcomming expsenses/spends which are pre-planned",
        endpoints: "/fin-manager/future-ticket/expense"
    },
    {
        name: "future gains",
        desc: "upcomming gains/income which are pre-planned",
        endpoints: "/fin-manager/future-ticket/gain"
    },
    {
        name: "past expenses",
        desc: "past expsenses/spends which are done",
        endpoints: "/fin-manager/completed-ticket/expense"
    },
    {
        name: "past gain",
        desc: "past gain/income which are done",
        endpoints: "/fin-manager/completed-ticket/gain"
    },
    {
        name: "notes",
        desc: "any reminder or important text",
        endpoints: "/fin-manager/note"
    },
    {
        name: "monthly spending threshold",
        desc: "maximum allowed monthly spending",
        endpoints: "/fin-manager/monthly-spending-threshold"
    }
]

module.exports = {
    apiConfig
}