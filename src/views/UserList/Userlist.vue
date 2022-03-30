<template>
    <div style="padding: 20px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="ID">
                <el-input v-model="formInline.ID" placeholder="ID"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="formInline.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formInline.eamit" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item label="所属一级商户">
                <el-input v-model="formInline.Merchant" placeholder="所属一级商户"></el-input>
            </el-form-item>
            <el-form-item label="当前等级">
                <el-select v-model="formInline.region" placeholder="当前等级">
                    <el-option label="平台" value="shanghai"></el-option>
                    <el-option label="一级商户" value="beijing"></el-option>
                    <el-option label="二级商户" value="shanghai"></el-option>
                    <el-option label="省级代理商" value="beijing"></el-option>
                    <el-option label="市级代理商" value="shanghai"></el-option>
                    <el-option label="普通会员" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="用户ID" width="80" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="80" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="province" label="手机号" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="city" label="邮箱" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="address" label="当前等级" width="80" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="zip" label="所属一级商户" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="recommend" label="直接推荐人" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="zip" label="所属上级" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="NumberOf" label="团队人数" width="300" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="performance" label="团队业绩" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="address" label="自购通证数量" width="300" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="zip" label="首次登录E购时间" width="120" header-align="center" align="center">
            </el-table-column>
            <el-table-column prop="address" label="最近登录时间" width="300" header-align="center" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "VueAdminTemplateUserlist",

        data() {
            return {
                formInline: {
                    ID: "",
                    phone: "",
                    eamit: "",
                    Merchant: "",
                    user: "",
                    region: "",
                },
                tableData: [{
                    date: '001',
                    name: '王小虎',
                    province: '15544466665',
                    city: '15544466665@163com',
                    address: '一级商户',
                    zip: '陆志廉15544466665',
                    recommend:'陆志廉15544466665',
                    NumberOf:100,
                    performance:300,
                }, {
                    date: '001',
                    name: '王小虎',
                    province: '15544466665',
                    city: '15544466665@163com',
                    address: '一级商户',
                    zip: '陆志廉15544466665',
                    recommend:'陆志廉15544466665',
                    NumberOf:100,
                    performance:300,
                }, {
                    date: '001',
                    name: '王小虎',
                    province: '15544466665',
                    city: '15544466665@163com',
                    address: '一级商户',
                    zip: '陆志廉15544466665',
                    recommend:'陆志廉15544466665',
                    NumberOf:100,
                    performance:300,
                }, {
                    date: '001',
                    name: '王小虎',
                    province: '15544466665',
                    city: '15544466665@163com',
                    address: '一级商户',
                    zip: '陆志廉15544466665',
                    recommend:'陆志廉15544466665',
                    NumberOf:100,
                    performance:300,
                }]
            };
        },

        mounted() { },

        methods: {
            // 点击查询
            onSubmit() {
                console.log("submit!");
            },
            handleClick(row) {
                console.log(row);
            }
        },
    };
</script>

<style lang="scss" scoped>
</style>