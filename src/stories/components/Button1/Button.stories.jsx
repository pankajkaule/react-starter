import Button from './Button'


export default{
    title:"practice/button1",
    component:Button
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
bgcolor:"green",
size:"medium",
color:"white"
};