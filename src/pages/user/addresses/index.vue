<template>
    <section class="addresses">
        <back-user-arrow />
        <h1 class="text-center">Addresses</h1>
        <user-add-address @openNewAddressModal="openNewAddressModal" />
        <div class="addresses__container">
            <user-address v-for="(address, index) in user.addresses" :key="index" :address="address"
                @removeAddress="removeAddress" @setAsDefault="setAsDefault" />
        </div>
    </section>
    <modal :open="openAddressModalActive" @closeModal="closeNewAddressModal">
        <address-form @closeNewAddressModal="closeNewAddressModal" />
    </modal>
</template>
  
<script>
import userAddress from '@/components/user/addresses/user-address'
import userAddAddress from '@/components/user/addresses/user-add-address'
import backUserArrow from '@/components/user/back-user-arrow'
import addressForm from '@/components/user/forms/address-form'
import { mapState, mapMutations } from 'vuex';
export default {
    components: {
        userAddress,
        backUserArrow,
        userAddAddress,
        addressForm
    },
    data() {
        return {
            openAddressModalActive: false,
        }
    },
    computed: {
        ...mapState('user', [
            'user',
        ]),
    },
    methods: {
        ...mapMutations('user', {
            'removeAddressStore': 'removeAddress',
            'setAddressAsDefault': 'setAddressAsDefault',
        }),
        removeAddress(address) {
            this.removeAddressStore({ address: address })
        },
        setAsDefault(address) {
            this.setAddressAsDefault({
                address: address
            })
        },
        openNewAddressModal() {
            this.openAddressModalActive = true;
            document.querySelector("body").style.overflow = 'hidden'
        },
        closeNewAddressModal() {
            this.openAddressModalActive = false;
            document.querySelector("body").style.overflow = 'auto'
        }
    }

}
</script>
  
<style lang="scss" scoped>
.addresses {
    &__container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr auto;
        gap: 20px;
        margin-top: 40px;

        @media screen and (min-width: 767px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (min-width: 1023px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (min-width: 1399px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
</style>
