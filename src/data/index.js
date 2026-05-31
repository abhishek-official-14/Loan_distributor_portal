export const plans = [
  { name: 'Starter', price: '₹1,499', description: 'For independent advisors', features: ['Up to 50 leads / month', 'Basic analytics', 'Email support', 'Standard commission rates'] },
  { name: 'Silver', price: '₹2,999', description: 'For growing distributors', features: ['Up to 150 leads / month', 'Advanced analytics', 'Priority support', 'Higher commission rates'], popular: true },
  { name: 'Gold', price: '₹5,999', description: 'For established agencies', features: ['Up to 500 leads / month', 'Team performance reports', 'Dedicated account manager', 'Premium commission rates'] },
  { name: 'Platinum', price: '₹9,999', description: 'For enterprise partners', features: ['Unlimited leads', 'Custom analytics reports', '24/7 concierge support', 'Maximum commission rates'] },
];
export const activities = [
  { id: '#LN-7842', customer: 'Ananya Sharma', type: 'Home Loan', amount: '₹18,50,000', status: 'Approved', date: '30 May 2026' },
  { id: '#LN-7841', customer: 'Rohan Mehta', type: 'Personal Loan', amount: '₹4,20,000', status: 'Pending', date: '29 May 2026' },
  { id: '#LN-7840', customer: 'Kavya Nair', type: 'Business Loan', amount: '₹9,75,000', status: 'Approved', date: '28 May 2026' },
  { id: '#LN-7839', customer: 'Vikram Singh', type: 'Car Loan', amount: '₹7,10,000', status: 'Rejected', date: '27 May 2026' },
  { id: '#LN-7838', customer: 'Ishita Rao', type: 'Home Loan', amount: '₹24,00,000', status: 'Approved', date: '26 May 2026' },
];
export const earnings = [
  { month: 'Jan', amount: 32000 }, { month: 'Feb', amount: 41000 }, { month: 'Mar', amount: 38000 },
  { month: 'Apr', amount: 54000 }, { month: 'May', amount: 68000 }, { month: 'Jun', amount: 74000 },
];
export const loanStatus = [{ name: 'Approved', value: 168, color: '#18b981' }, { name: 'Pending', value: 54, color: '#f4b740' }, { name: 'Rejected', value: 26, color: '#f06464' }];
export const loans = [
  ...activities,
  { id: '#LN-7837', customer: 'Arjun Kumar', type: 'Education Loan', amount: '₹6,40,000', status: 'Pending', date: '24 May 2026' },
  { id: '#LN-7836', customer: 'Priya Das', type: 'Personal Loan', amount: '₹3,30,000', status: 'Approved', date: '22 May 2026' },
];
