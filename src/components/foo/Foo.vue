<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Action, State} from 'vuex-class';

import {TestEnum} from '../../store/store';

const z = TestEnum.TEST_VALUE;

@Component
export default class Foo extends Vue {
    @Action('setVersionAction') private setVersion!: (version: string) => Promise<void>;
    @State((state) => state.versionString) private state!: string;
}

</script>
