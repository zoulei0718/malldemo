<template>
  <!-- <div>Category</div> -->
  <div class="wrapper">
    <ul class="content">
      <li>列表测试1</li>
      <li>列表测试2</li>
      <li>列表测试3</li>
      <li>列表测试4</li>
      <li>列表测试5</li>
      <li>列表测试6</li>
      <li>列表测试7</li>
      <li>列表测试8</li>
      <li>列表测试9</li>
      <li>列表测试10</li>
      <li>列表测试11</li>
      <li>列表测试12</li>
      <li>列表测试13</li>
      <li>列表测试14</li>
      <li>列表测试15</li>
      <li>列表测试16</li>
      <li>列表测试17</li>
      <li>列表测试18</li>
      <li>列表测试19</li>
      <li>列表测试20</li>
      <li>列表测试21</li>
      <li>列表测试22</li>
      <li>列表测试23</li>
      <li>列表测试24</li>
      <li>列表测试25</li>
      <li>列表测试26</li>
      <li>列表测试27</li>
      <li>列表测试28</li>
      <li>列表测试29</li>
      <li>列表测试30</li>
      <li>列表测试31</li>
      <li>列表测试32</li>
      <li>列表测试33</li>
      <li>列表测试34</li>
      <li>列表测试35</li>
      <li>列表测试36</li>
      <li>列表测试37</li>
      <li>列表测试38</li>
      <li>列表测试39</li>
      <li>列表测试40</li>
      <li>列表测试41</li>
      <li>列表测试42</li>
      <li>列表测试43</li>
      <li>列表测试44</li>
      <li>列表测试45</li>
      <li>列表测试46</li>
      <li>列表测试47</li>
      <li>列表测试48</li>
      <li>列表测试49</li>
      <li>列表测试50</li>
      <li>列表测试51</li>
      <li>列表测试52</li>
      <li>列表测试53</li>
      <li>列表测试54</li>
      <li>列表测试55</li>
      <li>列表测试56</li>
      <li>列表测试57</li>
      <li>列表测试58</li>
      <li>列表测试59</li>
      <li>列表测试60</li>
      <li>列表测试61</li>
      <li>列表测试62</li>
      <li>列表测试63</li>
      <li>列表测试64</li>
      <li>列表测试65</li>
      <li>列表测试66</li>
      <li>列表测试67</li>
      <li>列表测试68</li>
      <li>列表测试69</li>
      <li>列表测试70</li>
      <li>列表测试71</li>
      <li>列表测试72</li>
      <li>列表测试73</li>
      <li>列表测试74</li>
      <li>列表测试75</li>
      <li>列表测试76</li>
      <li>列表测试77</li>
      <li>列表测试78</li>
      <li>列表测试79</li>
      <li>列表测试80</li>
      <li>列表测试81</li>
      <li>列表测试82</li>
      <li>列表测试83</li>
      <li>列表测试84</li>
      <li>列表测试85</li>
      <li>列表测试86</li>
      <li>列表测试87</li>
      <li>列表测试88</li>
      <li>列表测试89</li>
      <li>列表测试90</li>
      <li>列表测试91</li>
      <li>列表测试92</li>
      <li>列表测试93</li>
      <li>列表测试94</li>
      <li>列表测试95</li>
      <li>列表测试96</li>
      <li>列表测试97</li>
      <li>列表测试98</li>
      <li>列表测试99</li>
      <li>列表测试100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {});
  }
};
</script>

<style scoped>
  .wrapper {
    height: 200px;
    border: 1px solid red;
  }
</style>