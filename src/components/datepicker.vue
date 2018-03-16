<template>
    <div>
        <div ref="datepicker" data-wrap="true" class="input-group date">
                <input type="text" class="form-control" :value="value" data-input/>

            <div class="input-group-addon" data-toggle>
                <span class="fa fa-calendar"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.css';

    export default {
        name: 'Datepicker',
        props: {
            value: {
                type: String,
                required: true
            },
        },
        data: () => ({
            fp: null
        }),
        watch: {
            value: 'updateDatepicker'
        },
        mounted() {
            this.initCalendar();
        },
        methods: {
            updateDatepicker() {
                if (!this.fp) return;

                this.fp.setDate(this.value);
            },
            initCalendar() {
                this.fp = flatpickr(this.$refs.datepicker, {
                    dateFormat: 'd.m.Y',
                    wrap: true,
                    onChange: (selectedDates, dateStr) => {
                        this.$emit('input', dateStr);
                    },

                });
            },
        },
    };
</script>

<style>
    .flatpickr-input {
        width: 110px;
        display: inline-block;
        vertical-align: middle;
    }

    .btn-datepicker {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
    }

    .input-group {
        width: 160px;
    }

    .input-group-addon {
        padding: 6px 12px;
        font-size: 14px;
        font-weight: normal;
        color: #555;
        text-align: center;
        background-color: #eee;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: table-cell;
        width: 40px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
    }
</style>