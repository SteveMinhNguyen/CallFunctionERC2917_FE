<template>
    <h2>Data call from Etherscans</h2>
</template>

<script>
import GovernmentAsset from "../Governance/GovernmentAsset";
import Balance from "../Governance/Balance";
import YourBallot from "../Governance/YourBallot";
import ChainApi from "../../../static/sdk/ChainApi";
import { mapState } from "vuex";
import { combineLatest } from "rxjs";

export default {
    components: {
        GovernmentAsset,
        Balance,
        YourBallot
    },
    name: "ERC2917",
    data() {
        return {
            totalReward: "",
            pool: "",
            totalStake: {
                redeemAmount: "",
                remainBlock: "",
                stakeAmount: "",
                totalStake: ""
            },
            tokenInfo: {
                address: "",
                allowance: "",
                allowance_gov: "",
                balance: "",
                decimals: "",
                status: "",
                symbol: "",
                totalSupply: ""
            },
            burn: "",
            $sub: null
        };
    },
    watch: {},
    computed: {
        ...mapState({
            isConnect: "isConnect",
            account: "account"
        })
    },
    mounted() {
        this.init();
    },
    destroyed() {
        this.$sub && this.$sub.unsubscribe();
    },
    methods: {
        init() {
            this.$sub = this.comb();
        },

        comb() {
            return combineLatest([
                this.$swap.loginStatus(),
                this.$swap.chainId()
            ]).subscribe(([isLogin, chainId]) => {
                if (isLogin) {
                    this.getFee();
                    this.queryStakeInfo();
                    this.getPool();
                    this.getCoinInfo();
                }
            });
        },
        getFee() {
            this.$swap.getBurn().then(res => {
                this.burn = res;
            });
            this.$swap.getTotalFee().then(res => {
                this.totalReward = res.totalReward;
            });
        },
        queryStakeInfo() {
            this.$store.dispatch("governance/queryStakeInfo").then(stake => {
                this.totalStake = stake;
            });
        },
        getPool() {
            this.$store.dispatch("governance/getPool").then(pool => {
                this.$store.commit("governance/setPoolAmount", pool);
                this.pool = pool;
            });
        },
        getCoinInfo() {
            this.$store.dispatch("governance/getCoinInfo").then(info => {
                this.tokenInfo = info;
            });
        },
        getERC2917Info() {
            this.$store.dispatch("governance/getERC2917Info").then(info => {
                this.tokenInfo = info;
            });
        }
    }
};
</script>

<style>
h2 {
    color: white;
}
</style>
