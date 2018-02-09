<template>
  <div class="vue-moxie">
    <slot></slot>
  </div>
</template>

<script>
import moxie from 'mOxie';
import moxieSwf from 'mOxie/bin/flash/Moxie.min.swf';

export default {
  name: 'VueMoxie',
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    accept: {
      type: [String, Array],
      default: '',
    },
    runtime_order: {
      type: String,
      default: 'html5,flash,silverlight,html4',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.moxieInit();
  },
  methods: {
    moxieInit() {
      moxie.core.utils.Env.swf_url = moxieSwf;

      const self = this;

      const fileInput = new moxie.file.FileInput({
        browse_button: this.$el,
        accept: this.accept,
        runtime_order: this.runtime_order,
        multiple: this.multiple,
      });

      fileInput.onchange = e => {
        self.$emit('input', e.target.files);
        self.$emit('onchange', e.target.files);
      };

      fileInput.init(); // initialize

      const fileDrop = new moxie.file.FileDrop({
        drop_zone: this.$el,
        accept: this.accept,
        multiple: this.multiple,
      });

      fileDrop.ondrop = function ondrop() {
        if (this.files && this.files.length > 0) {
          self.$emit('input', this.files);
          self.$emit('onchange', this.files);
        }
      };

      fileDrop.init();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-moxie {
  cursor: pointer;
}
</style>
