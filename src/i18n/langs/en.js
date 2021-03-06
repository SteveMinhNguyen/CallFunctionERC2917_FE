import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import {ProjectCoin, ChainCoin} from '@/assets/js/coin';

const zh = {
    Nav: {
        Pool: 'Pool',
        My: 'My Lending',
        Liquidation: 'Liquidation',
        Government: 'Governance',
        Mobility: 'Farm'
    },
    Base: {
        SwitchChain: 'Please switch to BSC chain',
        SwitchChainTip: 'Please switch to the BSC chain before proceeding to the next step',
        Btoken: 'Due to the instability of BSC network, cross-chain transactions may not be identified and cause long-time pending. However, stuck assets are safe and BurgerSwap’s developers will check one by one manually, to make sure they arrive in your wallet eventually.',
        BtokenTip: 'Use at your own risk.',
    },
    Solo:{
        Title: 'Burger Shack',
        Tip: 'Single-Asset Double Mining Aggregator',
        TotalLock: 'Total Value Locked',
        UserIncome: 'Total Users Earned',
        Symbol: 'Token',
        Placeholder: 'Please enter quantity',
        Annualized: 'Total APY',
        Use: 'Remaining',
        Balance: 'Balance',
        ExtractableUse: 'Available',
        Income: 'Total Earned',
        Receive: 'Earned',
        Approve: 'Approve',
        Deposit: 'Deposit',
        Withdrawal: 'Withdraw',
        Extraction: 'Harvest',
        ShackTip: "*Burger Shack's single token aggregator is strategically provided by Solo. Users please be aware of any potential risk including the fund into and out of mdex during the aggregation.",
        ApyTip: 'The undrawn earnings will be reinvested by the contract every 10 minutes.' ,
        ApyTips: 'Notice: The compound interest will increase significantly after time and be impacted by claiming frequently.',
        TotalApy: 'Total APY',
        FarmApy: 'Farm APY',
        FarmApr: 'Farm APR',
        AddApr: 'ADD APY',
        XburgerApr: 'XBURGER APR',
        Lock: 'Total Deposit',
        Times: 'xBURGER Mining Countdown',
        Hour: 'HOURS',
        Minutes: 'MINUTES',
        Seconds: 'SECONDS',
    },
    Account: {
        Title: 'Account Info',
        DepositText: 'Supply',
        Pledge: 'Stake',
        MiningRevenue: 'Mining Rewards',
        AccountBalance: 'Balance',
        ToCollected: 'Rewards',
        Total: 'Balance：',
        TotalAssets: ' Total Assets',
        FundPool: 'Pool',
        AmountDeposits: 'Supply',
        AmountLoan: 'Borrowed',
        ProportionPool: 'Percentage',
        NetAssetValue: 'Net Asset',
        AssetProfile: 'Asset Profile',
        TransactionHistory: 'Transaction',
        LiquidationHistory: 'Liquidation'
    },
    Main: {
        Account: 'My Account',
        Liquidation: 'Liquidation',
        Mobility: 'Liquidity mining',
        FAQ: `Trade ${ProjectCoin}`,
        Medium: 'Medium',
        ComingSoon: 'Coming Soon',
        WalletNotConnected: 'Wallet Not Connected',
        ConnectWallet: 'Connect Wallet',
        LogOut: 'Log Out',
        Zh: 'Chinese',
        En: 'English',
        NotInstalled: 'METAMASK Not Installed',
        Download: 'Download',
        Connect: 'Connect'
    },
    FundPool: {
        LockUp: 'Protocol TVL',
        Table: {
            Asset: 'Collateral Asset',
            MarketSize: 'Collateralized',
            TotalBorrowings: 'Total Borrowing',
            TotalCollateral: 'Total Collateral',
            AnnualDeposit: 'Supply APY',
            AnnuaLisationLoans: 'Annual Interest Rate',
            UtilizationRate: 'Utilization Rate'
        },
        Charging: 'Supply',
        Lend: 'Lend',
        Loan: 'Borrow',
        Switch: 'Switch',
        AmountDeposit: 'Supplied',
        BorrowedQuantity: 'Borrowed',
        TransactionRecords: 'Transaction Records',
        TradingHours: 'TRX Time',
        Active: 'Activity',
        Hash: 'Transaction ID',
        Survey: 'Overview',
        TotalPledgeQuantity: 'Total Staking Volume',
        TotalSupply: 'Total Supply',
        Output: 'Circulaing Supply',
        AnnualisationCurrency: 'APR',
        AnnualizedDeposit: 'APY',
        MaximumLoan: 'Maximum LTV',
        Representative: 'LTV (Load-to-Value represents the max. borrowing power)',
        LiquidationRatio: 'Liquidation ratio',
        CurrentLoanDepositRatio:
            'The assets will be liquidated if the LTV exceeds the liquidation ratio',
        AnnualMining: 'Farming APY',
        PlatformCurrency: `${ProjectCoin} Mining APY`,
        WalletBalance: 'Wallet Balance',
        MyRepayable: 'Amount to Repay',
        Deposited: 'Supplied',
        LoanAmount: 'Borrowed',
        LoanInterest: 'Borrowing Interest',
        Collateral:
            'The assets will be liquidated if the LTV exceeds the liquidation ratio',
        AcceptableQuantity: 'Withdraw-able Amount',
        RemainSupply: 'Balance in pool',
        AcceptableAmount: '可取数量包含本金及利息',
        GainRevenue: 'Interest',
        LiquidationApportionment: 'Liq.dividends',
        OfLiquidation: '发生清算会将抵押物分摊给存款用户',
        Desirable: 'Withdrawable',
        CanBorrow: 'Borrow Limit',
        ComprehensiveApy: 'Comprehensive APY',
        ApyMining: 'Farming APY',
        ComprehensiveApyTips: 'Comprehensive APY = Farming APY + Supply APY',
        DepositInterestRate: 'Supply Interest',
        LoanInterestRate: 'Loan Interest',
        FloatingRateLoan: 'Dynamic interest loan',
        Past30DAvg: '30D Avg.',
        PercentageTotal: 'Percentage',
        TheFluctuation: 'This is only for your reference.',
        GainRevenueInterest: 'Gain rewards',
        APY: 'Supply APY',
        APR: 'Borrow APY',
        canLoan: 'Borrow Limit',
        DepositTips:
            '*When an account Repay its borrowing outstanding, pro rata and LP Mining rewards collateral will be returned'
    },
    Staking: {
        Title: `Stake ${ProjectCoin} to receive transaction fee rewards`,
        AwardsAllocated: 'Total rewards',
        MortgageQuantity: 'Total Collateral',
        Available: 'Rewards to Claim',
        Mortgaged: 'Collateralized',
        DepositAmount: 'Wallet Balance',
        Extractable: 'Withdrawable',
        AvailableAsset: 'Wallet Balance',
        WithdrawalPledge: 'Unstake'
    },
    Parameter: {
        Title: 'Parameters',
        ParameterName: 'Name',
        ParameterValue: 'Value',
        CommonParameters: 'Parameters',
        Name: 'Name',
        BaseRate: 'Interest base',
        MarketHeat: 'Market Popularity',
        PledgeRate: 'Stake ratio',
        OutStockRate: 'Liquidation ratio'
    },
    Government: {
        Title: 'Government',
        CreateProposal: 'Create a proposal',
        SelectProposal: 'Select a proposal',
        SelectPool: 'Select a pool',
        CurrentAmount: 'Current amount',
        FollowingRange: 'Value range',
        NumberYouWant: 'Value you propose',
        EnterDetails: 'Details',
        YourBallot: 'Your Ballot',
        LeftPrompt: '',
        OnGoing: 'On Going',
        Finished: 'Finished',
        Creater: 'Creater',
        Creat: 'Creat',
        TotalBallot: 'Total ballot',
        VoteBonus: 'Vote Bonus',
        YourBonus: 'Your Bonus',
        Collect: 'Collect',
        Effection: 'Effection',
        YouVote: 'You vote',
        Balance: 'Balance',
        BalanceTips: '',
        parametersGovernance: 'parameters in governance',
        View: 'View',
        TotalGovernance: 'Total staked in governance',
        Pending: 'Pending',
        Success: 'Success',
        Error: 'Error',
    },
    GovernmentJson: {
        PROPOSAL_VOTE_DURATION: 'Created time',
        PROPOSAL_EXECUTE_DURATION: 'Proposal will be executed from',
        PROPOSAL_CREATE_COST: 'Proposal creation fee',
        STAKE_LOCK_TIME: `${ProjectCoin} locking time after voting`,
        MINT_AMOUNT_PER_BLOCK: 'Amount of token per block',
        INTEREST_PLATFORM_SHARE:
            'The percentage of interest distributed to the team',
        INTEREST_BUYBACK_SHARE:
            'Percentage for buyback excluding the part for the team',
        CHANGE_PRICE_DURATION:
            'Minimum time interval between two price changes (in blocks)',
        CHANGE_PRICE_PERCENT: 'Max percentage change in price',
        POOL_BASE_INTERESTS: 'Interest base',
        POOL_MARKET_FRENZY: 'Market popularity',
        POOL_PLEDGE_RATE: 'Staking rate',
        POOL_LIQUIDATION_RATE: 'Liquidation rate',
        POOL_MINT_BORROW_PERCENT: 'Percentage of borrow-mining',
        POOL_MINT_POWER: 'Weight of mining pool'
    },
    Button: {
        Obtain: 'Claim',
        Earn: 'Earn',
        Authorization: 'Approve',
        Mortgage: 'Collateralize',
        Release: 'Claim',
        Extract: 'Claim',
        All: 'ALL',
        SignOut: 'Exit',
        Ok: 'Confirm',
        TakeOut: 'Withdraw',
        Loan: 'Borrow',
        Repayment: 'Repay',
        Deposit: 'Supply',
        ReInvestment: 'Supply Interest',
        Back: 'Back',
        Redeem: 'Redeem',
        Implement: 'Execute',
        Receive: 'Claim',
        Return: 'Back',
        Vote: 'Vote',
        GovernanceAwards: 'Claim voteBonus',
        InitiateAProposal: 'Create ',
        Add: 'Stake',
        Provide: 'Provide Liquidity to',
        Cancel: 'Cancel'
    },
    Form: {
        PlaceAmount: 'Amount',
        HaveExceeded: 'Limit exceeded',
        TheRange: 'Please enter a number falls in the range',
        All: 'All',
        Completed: 'Successful',
        HaveInHand: 'Ongoing',
        Fail: 'Failed',
        ProposalType: 'Proposal type',
        Filter: 'Filtered'
    },
    LiquidationPage: {
        ClearInformation: 'Liquidation Info',
        AssetText: 'Asset',
        AmountReturned: 'To Repay',
        QuantityPledge: 'Collateral',
        CurrentLoanDeposit: 'Current LTV',
        LiquidationRatio: ' Liq.ratio',
        Operation: 'Action',
        LoadMore: 'More',
        LiquidationRecords: 'Liquidation Records',
        LiquidationTime: 'Times',
        LiquidationQuantity: 'Liquidation amount',
        QuantityCollateral: 'Collateral amount'
    },
    Public: {
        OperationSuccess: 'Successful',
        Liquidation: 'Liquidating',
        NotData: 'Not available',
        ProposedQuantity: 'Withdraw amount cannot be 0',
        OperationFailed: 'Failed',
        SuccessfulInvestment: 'Supply Interest Successful',
        ExtractionSucceeded: 'Withdrawal Successful',
        RemainSupplyError: 'Insufficient balance in the pool',
        MintLender: 'Lender Mint',
        MintBorrower: 'Borrower Mint'
    },
    Mobility: {
        MiningTitle: `Stake ${ProjectCoin} Tokens and earn ${ProjectCoin}`,
        BecomeLiquidity: `Gain ${ProjectCoin} by becoming an LP`,
        AddCoins: `Supply certain BEP-20 tokens to earn ${ProjectCoin}`,
        GetInto: 'Enter',
        NextReward: 'Next reward',
        Add: 'Add',
        Earn: 'Earn',
        Receive: 'Receive'
    },

    setting: {
        settingTitle: 'Transaction Setting',
        toleranceTitle: 'Slippage tolerance',
        deadlineTitle: 'Transaction deadline',
        minute: 'minute',
        LanguageSet: 'Language settings',
        msg: {
            '0': 'Your transaction may fail.',
            '1': 'Your transaction may be frontrun.',
            '2': 'Invalid slippage percentage.'
        },
        proTxts: {
            '0':
                'Your transaction will revert if the price changes unfavorably by more than this percentage.',
            '1':
                'Your transaction will revert if it is pending for more than this long.'
        }
    },
    MyData: {
        MyData: 'MyData',
        TotalTrade: 'Total Trade',
        TotalRevenue: 'Total Revenue',
        Trade: 'Trade',
        Revenue: 'Revenue',
        week: 'week',
        month: 'month'
    },
    MyDataTrade: {
        Governance: 'Governance',
        'ParticipationVote ': 'Participation Vote',
        'VoteRevenue ': 'Vote Revenue',
        Bridge: 'Bridge',
        CosschainAssets: 'Cosschain Assets',
        CrosschainValue: 'Crosschain assets value'
    },
    MainView: {
        Swap: 'Swap',
        Pool: 'Liquidity',
        Lending: 'Lending',
        Governance: 'Governance',
        Transit: 'Bridge',
        vol: `24H Total Volume (${ChainCoin})`,
        liq: `Total Liquidity (${ChainCoin})`,
        Ifo: 'IFO',
        NextPage: 'Next IFO',
        PastPage: 'Past IFO',
        Bridge: 'bToken Bridge',
        BurgerBridge: 'Burger cross-chain',
        BinanceBridge: 'Binance Bridge',
        Info: 'Info',
        Analytics: 'Analytics',
        My: 'My Data',
        OpenApi: 'OpenApi',
        Trade: 'Trade',
        LaunchPad: 'LaunchPad',
        FarmingPools: 'LaunchPool',
        Farms: 'Farms',
        Doc: 'Docs',
        XBurgerShack: 'xBurger Pool',
        Prediction: 'Prediction'
    },
    swapControl: {
        ErrorPair: 'Insufficient Liquidity',
        all1_btn: 'MAX',
        PriceText: 'Price',
        per: 'per',
        chooseTokenText: 'Choose token',
        PriceImpact: 'Price Impact',
        Fee: 'Transaction fee',
        Router: 'Router',
        proTxts: {
            '0':
                'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
            '1':
                'The difference between the market price and estimated price due to trade size.',
            '2':
                'A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.',
            '3':
                'Routing through these tokens resulted in the best price for your trade.'
        },
        balanceTitle: 'Balance: ',
        balanceTitle0: 'Balance: ',
        From: 'From',
        To: 'To',
        textSuffix: ' (estimated)',
        Swap: 'Swap',
        ConnectWallet: 'Connect Wallet',
        Minimumreceived: 'Minimum received',
        Maximumsold: 'Maximum sold',
        receive: 'receive at least',
        sell: 'sell at most',
        Insufficient: 'Insufficient balance',
        Approve: 'Approve ',
        Approvingfor: 'Approving for '
    },
    poolControl: {
        Collecting: `Collecting ${ProjectCoin} from liquidity`,
        Connect_btn: 'Add Liquidity',
        Your: 'Your Liquidity',
        Connect: 'Connect to a wallet to view your liquidity',
        see: 'Don’t see a pool you joined?',
        Importit: 'Import it. ',
        proTxt1:
            `When you add liquidity, you are given ${ProjectCoin} that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.`
    },
    governanceControl: {
        All: 'All',
        feeSumtitle: 'Total transaction fee: ',
        stakeSumtitle: 'Total governance stake: ',
        Totalsupplytitle: 'Total supply: ',
        totalstaked: 'total staked',
        feesum: 'History total fee sum',
        Currentbonuspool: 'Current bonus pool',
        Approve: 'Approve ',
        Approvingfor: 'Approving for ',
        rejected: 'Transaction rejected.',
        Insufficient: `Insufficient ${ProjectCoin} balance`,
        Staking: 'Staking',
        Redeeming: 'Redeeming',
        balancetext: ` (staked) ${ProjectCoin}`,
        Balance: 'Balance:',
        totalDgastitle: 'Current proposal pool: ',
        totalBurned: 'Total burned:',
        stake_btn: 'Stake',
        redeem_btn: 'Redeem',
        voteTitle: 'Vote',
        FilterBtn: 'Filter      ',
        NewVoteBtn: 'New Vote',
        bellottitle: 'Your Ballot:',
        connectBtn: 'Connect Wallet ',
        proTxts: {
            '0':
                `You can stake your ${ProjectCoin} to govern.You can staked after period of time.`,
            '1':
                `You will get ${ProjectCoin} correspond in the number of ballot from the proposal you voted.`
        },
        stakeTitle: `Stake your ${ProjectCoin}`,
        redeemTitle: `Redeem your ${ProjectCoin}`,
        stake: 'Can be Stake: ',
        redeem: 'Can be redeemed: ',
        stakeBtn: 'Stake',
        maxBtn: 'MAX',
        processType1: 'Passed',
        processType2: 'Ongoing',
        processType3: 'Failed',
        hrs: ' hrs(estimated) left you can redeem',
        networkLink: 'Change wallet network'
    },
    AccountInfoUI: {
        Account: 'Account',
        Connected: 'Connected with MetaMask',
        copy_btn: 'Copy Address',
        copySuccess: 'Copied successfully',
        view_btn: 'View on BscScan',
        Recent: 'Recent Transactions',
        clear_btn: 'clear all',
        noReceive: 'Please receive the transfer first, and then copy the address'
    },
    AddLiquidityUI: {
        LpAmount: 'LP number',
        Supply: 'Supply',
        Insufficient: 'Insufficient balance',
        Approve: 'Approve ',
        Approvingfor: 'Approving for ',
        add_btn: 'Add',
        remove_btn: 'Remove',
        mintReward_btn: 'Claim',
        feeReward_btn: 'Claim',
        Pooled: 'Pooled ',
        tokens: `${ProjectCoin} tokens:`,
        Liquidity_mining: 'Liquidity mining',
        Liquidity_total_mining: 'Total reward',
        share: 'Your pool share :',
        Pool_fees: 'Pool fees:',
        Add: 'Add Liquidity',
        all1_btn: 'MAX',
        all2_btn: 'MAX',
        pricesTitle: 'Prices and pool share',
        Choose: 'Choose token',
        p_title1: 'Input',
        p_title2: 'Input',
        g2_txt3: 'Share of Pool',
        Your: 'Your position',
        balancetitle: 'Balance:',
        balancetitle1: 'Balance:',
        proTxt1:
            `When you add liquidity, you are given ${ProjectCoin} representing your position. Your ${ProjectCoin} will increase over time, and can be redeemed at any time.`
    },
    pool_import: {
        title: 'Import Pool',
        coin2_title: 'Select a Token',
        proTxt1:
            'Use this tool to find pairs that don\'t automatically appear in the interface.',
        Connect: 'Connect to a wallet to view your liquidity'
    },
    coinSelectView: {
        selectTitle: 'Select a token',
        coin_title: 'Token Name',
        Having: 'Having trouble finding a token?',
        proTxts:
            'Find a token by searching for its name or symbol or by pasting its address below.',
        Search: 'Search name or paste address',
        searchInput: 'Search name or paste address'
    },
    VoteBooleanDetail: {
        ValuechangeTitle: 'Value change: ',
        blocksleft: ' blocks left',
        proposaleraddressTitle: 'Proposaler address: ',
        Proposalerbonus: '(Proposaler bonus)',
        TotalBallotTitle: 'Total ballot: ',
        finishedtitle: 'Finish: ',
        Vot: 'Vote',
        Vote: 'Vote Bonus: ',
        Detail: 'Detail',
        btnExecute: 'Execute',
        Execute: 'Execute',
        Executed: 'Executed',
        Collected: 'Claimed',
        Collect: 'Claim',
        You: 'You vote ',
        Your: 'You can vote',
        affirmative: 'You affirmative',
        dissenting: 'You dissenting',
        Creat: 'Created: ',
        BonusText: 'Your Bonus: ',
        BonusText1: 'Your Bonus',
        processType1: 'Passed',
        processType2: 'Ongoing',
        processType3: 'Failed',
        Collectvote: 'Collect vote bonus',
        Executeproposal: 'Execute proposal'
    },
    RemoLiquidity: {
        title: 'Remove Liquidity',
        amountT: 'Amount',
        Btn_100: 'MAX',
        Prices: 'Prices',
        Your: 'Your position',
        enter: 'Enter an amount',
        Approve: 'Approve',
        Approvingfor: 'Approving for',
        RemoveFirePairTip:
            `When you remove liquidity from  ${ChainCoin} — FRIES, you will get W${ChainCoin} and FRIES`,
        Remove: 'Remove',
        Removing: 'Removing',
        and: 'and',
        proTxt1:
            'Removing liquidity will reduce proportional to your left share of the pool.'
    },
    comfirmSwapView: {
        Swapping: 'Swapping',
        for: 'for',
        PriceImpact: 'Price Impact',
        Fee: 'Liquidity Provider Fee',
        title: 'Confirm Swap',
        Price: 'Price',
        submitBtn: 'Confirm Swap',
        proTxts: {
            '0':
                'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
            '1':
                'The difference between the market price and estimated price due to trade size.',
            '2':
                'A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.'
        },
        Output: 'Output is estimated.You will',
        or: ' or the transaction will revert.',
        rejected: 'Transaction rejected.'
    },
    confirmSupplyView: {
        rejected: 'Transaction rejected.',
        Supplying: 'Supplying',
        and: 'and',
        Rates: 'Rates',
        You: `You will get ${ProjectCoin}`,
        Share: 'Pair liquidity :',
        Desposite: 'Desposite',
        submitBtn: 'Confirm Supply',
        Once: `Once you supply liquidity, you will get ${ProjectCoin}.`,
        msg:
            'Output is estimated. If the price changes by more than the  slippage you set your transaction will revert.'
    },
    nowVote: {
        txTitle: 'New Vote',
        TokenAddress: 'Token Address',
        addressInput: 'Paste your address',
        txSelectItem: 'Select ...',
        txVoteBonus: 'Vote Bonus(elimated): ',
        txItemDescrible: `You need -- ${ProjectCoin}(not redeemed) to submit vote`,
        btnSubmit: 'Submit Vote',
        rangeText: 'this vote you can input a number in range   ',
        amount_input: 'Input number you wanted',
        content_input: 'Input content',
        PayDGAS: `Pay ${ProjectCoin}`,
        txVoteBonas: 'Payment',
        txSelectItem1: 'You want to pay',
        txItemDescrible1: 'loading...',
        btnApporve: 'Approve',
        btnNewToken: 'New Token',
        Confirm: 'Confirm',
        Address: 'Address:',
        Fee: 'Fee:',
        You: 'You will pay ',
        token: ` ${ProjectCoin} for new token`,
        updateconfig: ` ${ProjectCoin} for update config`,
        btnConfirm: 'Confirm',
        Pay: 'Pay ',
        Next: 'Next',
        Submit: 'Submit',
        SubmitVote: 'Submit Vote',
        Currentvalue: 'Current value is ',
        Goodjob: '√',
        notenough: 'You balance is not enough',
        rejected: 'Transaction rejected.'
    },
    submit: {
        error: 'Error',
        close_btn2: 'Dismiss',
        View: 'View on Bsccan',
        closeBtn: 'Close',
        transaction1: 'Transaction Submitted',
        waiting: 'Waiting For Confirmation',
        confirm: 'Confirm this transaction in your wallet'
    },
    linkView: {
        About: 'About',
        Code: 'Code',
        Contract: 'Contract',
        telegraph: 'Telegram',
        analytics: 'Analytics',
        doc: 'OpenApi',
        cross: 'Cross-chain Bridge'
    },
    'Event': {
        'FOR': {
            'Home': 'Home',
            'Name': 'FOR Bonus',
            'DateTitle': 'Reward period：',
            'Date': 'September 16th, 14:00 UTC -September 22rd 14:00 UTC',
            'RewardsTitle': 'Rewards：',
            'Rewards': '45,000 BURGER and 100,000 FOR over the 6 day campaign period',
            'RulesTitle': 'Campaign Rules：',
            'Rules': 'The reward pool will be shared among FOR liquidity providers on BurgerSwap. The top 100 liquidity providers, in terms of the average liquidity provided per trading pair, FOR/BNB and FOR/BURGER, will be eligible to receive BURGER rewards according to the campaign rules.We have 100m FOR token for ForTube BSC ecology. Burgerswap is a part of the total. After the campaign ends, we will publish the list of winners on list on our official social channels.',
            'BonusTitle': 'Creamy Prices：',
            'No1': 'No.1: ',
            'No1Amount': '2,500 BURGER',
            'No2': 'No.2: ',
            'No2Amount': '1000 BURGER',
            'No3': 'No.3: ',
            'No3Amount': '500 BURGER',
            'No4': 'No.4 to No.10: ',
            'No4Amount': '100 BURGER / Address',
            'No5': 'No.11  to 100: ',
            'No5Amount': 'share the rest'
        }
    },
    'Update': {
        'Des': 'V2 Governance section updating. Thanks for your patience.'
    },
    'Transit': {
        'Tip': {
            '0': '',
            '1': 'Bep 20 to Erc 20 bridge only supports conversion of  “bToken” (bTokens are collateralized crosschain assets issued through the burger bridge)',
            '2': 'The cross-chain transaction fees will be charged when you receive the cross-chain assets on BSC. The total transaction fee includes a handling fee of 0.05 BNB and Gas fee generated from on-chain trading.',
            '3': 'Bep 20 to Erc 20 bridge only supports conversion of  “bToken” (bTokens are collateralized crosschain assets issued through the burger bridge), A conversion fee of 0.05 BNB will be charged. ',
            '4': 'Please note that when using the bridge to create cross-chain assets (bTokens), these bTokens can ONLY be traded after providing liquidity on the bToken/BNB and bToken/BURGER pairs!'
        },
        'ListTitle': 'Transit record',
        'Recieve': 'Recieve',
        'Receiving': 'Receiving',
        'Copy': 'Copy contract address',
        'TransitBtn': 'Create crosschain assets',
        'RedeemBtn': 'Redeem crosschain assets',
        'ETHTip': 'Please change your network to BSC mainnet to redeem crosschain assets',
        'BSCTip': 'Please change your network to Ethereum mainnet to create crosschain assets ',
        'BSCClose': 'For  user asset security, we have decided to suspend the use of ERC20 to BEP20 cross-chain bridge and maintain this feature urgently.',
        'Note': {
            '0': 'Please note that when using the bridge to create cross-chain assets (bTokens), these bTokens can ONLY be traded after providing liquidity on the bToken/BNB and bToken/BURGER pairs!',
            '1': 'If the bToken is not yet trading on BurgerSwap, it will only be tradable after liquidity is provided!',
            '2': 'Check the list on the SWAP page to see if a token is already trading on BurgerSwap.',
            '3': 'If you want to trade listed tokens like BNB, USDT, BUSD, LINK, DOT etc, these can be converted from ERC20 (Ethereum) and BEP2 (Binance Chain) to BEP20 (Binance Smart Chain) in 2 ways:',
            '4': '1. Through withdrawal on <a href="https://Binance.com">https://Binance.com</a>',
            '5': '2. Through the Binance Chain Chrome extension',
            '6': 'See our tutorials for step by step guides. You can find our tutorials on Medium <a>https://medium.com/@bnburgerking</a>.',
            '7': 'Don\'t prompt again'
        },
        'MaxRange': 'Exceed the convert limit',
        'Convert': 'Convert',
        'ConvertSuccess': 'Convert success',
        'ConvertDesc': 'The converted BNB will be sent directly to your BSC address',
        'ConvertTip': 'BEP-2 BNB will be consumed to pay for Gas fee when you interact with smart contracts on BSC. If you don\'t have BEP-2 BNB in your BSC address, please swap for BEP-2 BNB here, which will be sent to you BSC address directly after the swap.',
        'ConvertRecord': 'Convert {amountIn} {token} for {amountOut} BNB',
        'Processing': 'Processing',
        'Completed': 'Completed',
        'ConvertTitle': 'Convert record',
        'Close': 'Close',
        'Station': 'BNB Gas Station',
        'hashTipEth': 'Please Input Ethereum Transaction Hash',
        'hashTipBsc': 'Please Input BSC Transaction Hash',
        'hashTipSubmit': 'Submit',
        'hashTipSuccess1': 'DONE',
        'hashTipSuccess2': 'Updated successfully',
        'hashTipError': 'Invalid Data',
        placeAccount: 'Please switch to {account} address operation'
    },
    Ifo: {
        title: 'IFO: Initial Farm Offerings',
        subTitle: 'Buy new tokens with a brand new token sale model.',
        onGoing: 'Ongoing',
        end: 'Ended',
        comingSoon: 'Coming',
        comingTitle: '<span>{d}d {h}h {m}m {s}s</span> until start',
        openTime: '<span>{d}d {h}h {m}m {s}s</span> until finish',
        partakeToken: 'Purchase token:',
        all: 'All',
        contribute: 'Contribute',
        approve: 'Approve',
        committed: 'LP Token Committed',
        claimable: 'Claimable',
        claimAll: 'Claim All Tokens',
        startTime: 'Start Time',
        ifoAmount: 'Token Amount',
        raiseAmountUSD: 'Raise Amount (USD)',
        burnAmountUSD: 'Burger to burn (USD)',
        percentage: 'Total raised (% of target)',
        pricePer: 'Price per {token}',
        projectInfo: 'Project Details',
        website: 'website ->',
        noData: 'No Data...',
        balance: 'Balance:',
        useCommitted: 'Committed:',
        details: 'Details',
        hide: 'Hide',
        rule1: 'How to participate?',
        rule2: 'Before Sale:',
        rule3: '* Buy BURGER and USDT tokens<br> * Get BURGER-USDT BLP tokens by adding BURGER and USDT liquidity',
        rule4: 'Get Burger',
        rule5: 'Get BLP tokens',
        rule6: 'During Sale:',
        rule7: '* While the sale is live, commit your BURGER-USDT BLP tokens to buy the IFO tokens',
        rule8: 'After Sale:',
        rule9: '* Claim the tokens you purchased, along with any unspent funds',
        rule10: 'How to launch your own IFO ?',
        rule11: 'Launch your project on Burgerswap. BurgerSwap is the first democratized DeFi platform on the Binance<br>Contact us, to bring your token directly to the most active and rapidly growing community on BSC.',
        comTitle: 'Coming Soon ...',
        comSubTitle: 'Your OPTION to redefine Initial Offering',
        webTxt: 'Committed to building a parallel world that keeps prospering along with the NFT market, we capture the value of DeFi through FUN Protocol. In the parallel world, there’s an exclusive circulated token system, a network that constantly stimulates NFT creation, and a governance ecosystem represented by NFT. In a word, FUN plays an interesting and important role in the whole NFT world.',

        farmTitle: 'Farms',
        farmSubTitle: 'Stake BurgerSwap Liquidity Pool (LP) tokens to earn Burger and other tokens',
        inProgress: 'In Progress',
        completed: 'Completed',
        farmPool: 'Farming Pool',
        tag1: 'Farming',
        tag2: 'Completed',
        totalRewards: 'Total Rewards:',
        farmingPeriod: 'Start Block:',
        day: 'day',
        comTimeTxt: 'Time until farming ends:',
        endTimeTxt: 'Session end date:',
        apr: 'APR:',
        earned: '{token} EARNED',
        harvest: 'Harvest',
        staked: 'STAKED',
        stake: 'Stake',
        unStake: 'unStake',
        deposit: 'Deposit:',
        totalLiquidity: 'Total Liquidity:',
        modalTitle: '{name} LP Tokens',
        isWhite: ' Ineligible To Participate'
    },
    xBurger: {
        title: 'xBurger Pool',
        subTitle: 'Staking token ，Mining xBurger',
        tvl: 'TVL'
    },
    prediction: {
        statusTag1: 'Expired',
        statusTag2: 'Living',
        statusTag3: 'Next',
        statusTag4: 'Later',
        closedPrice: 'CLOSED PRICE',
        lastPrice: 'LAST PRICE',
        lockedPrice: 'Locked Price',
        pricePool: 'Price Pool',
        payout: 'Payout',
        openTxt: 'Settlement in progress...',
        entryStarts: 'Entry starts',
        setPosition: 'Set Position',
        commit: 'Commit',
        max: 'MAX',
        balance: 'Balance',
        approve: 'Approve',
        ok: 'Confirm',
        tips: 'You won’t be able to remover or change your position once you enter it.',
        minAmount: 'Least Input {amount}',
        pausedTxt1: 'Markets Paused',
        pausedTxt2: 'You can reclaim any funds entered into existing positions via the History tab on this page.',
        footerChart: "Chart",
        footerHistory: "Your History",
        footerCollectAll: "Collect All",
        footerRound: "Round",
        footerResuit: "Your Resuit",
        footerCollect: "Collect",
        footerNoData: "No History found",
        footerGold: "Collect Bonuses",
        footerCollecting: "Collecting",
        footerDirection: "Your Direction",
        footerUP: "UP",
        footerDOWN: "DOWN",
        footerPosition: "Your Position",
        footerCLOSED: "CLOSED PRICE",
        footerPayout: "Payout",
        footerAll: 'All',
        footerCollected: 'Collected',
        footerUncollected: 'Uncollected'
    },
    ...zhLocale
};
export default zh;
