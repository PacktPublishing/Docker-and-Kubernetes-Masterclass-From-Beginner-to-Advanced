# Understanding Kubernetes Network Policies: Pod Selector and Ingress

Welcome to this exercise where we'll dive into defining selectors in the ingress section of Kubernetes network policies! 🐳 In this session, we'll explore how to use pod selectors effectively using match expressions, and we're going to give you a chance to apply what you learn hands-on. Before looking at the step-by-step guide, I encourage you to tackle the exercise on your own. Ready? Let's break it down!

## Overview

In this exercise, you should aim to implement a network policy that determines which pods can communicate with each other based on their labels. The specific tasks are as follows:

1. Define pod selectors in a network policy using match expressions.
2. Apply multiple pod selector conditions.
3. Test your policy to confirm that it allows or denies traffic based on the labels.
4. Modify the network policy to test the behavior with different label combinations.

Give it your best shot to implement these steps before checking the detailed guide below!

## Step-by-Step Guide

1. **Define your Pod Selectors**: Create a network policy with pod selectors that allow traffic based on certain label conditions using the `in` operator.
2. **Apply Multiple Conditions**: If needed, add additional pod selectors that include different labels to test behavior with logical `or` conditions.
3. **Test Your Network Policy**:
   - Apply the policy using `kubectl apply`.
   - Create pods with specified labels (like `app=curl` and `tier=backend`).
4. **Examine Communication**: Use `kubectl exec` to enter a pod and test connections (like curl requests) to see if they succeed or fail based on the policy.
5. **Modify and Reapply Your Policy**:
   - Change your pod labels or policy definitions and reapply them to observe the changes in behavior.
6. **Confirm Results**: Test again to make sure the policy behaves as expected when pod labels meet or don’t meet the specified conditions.

## Conclusion

In this lecture, we've explored how to define pod selectors within network policies in Kubernetes, specifically looking at how to use match expressions and behavior under different configurations. Remember, practicing these skills will help deepen your understanding of Kubernetes network management. Keep experimenting and enhancing your knowledge! 🚀
