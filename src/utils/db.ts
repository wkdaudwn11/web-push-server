const subscriptions = new Set();

export const saveSubscription = (subscription: PushSubscription) => {
  subscriptions.add(subscription);
};

export const getSubscriptions = () => Array.from(subscriptions);

export const clearSubscription = () => {
  subscriptions.clear();
};
