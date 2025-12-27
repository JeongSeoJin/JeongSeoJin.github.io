# Paper Review - "Design Principles for Energy Efficient Legged Locomotion and Implementation on the MIT Cheetah Robot"

## What is this paper regarding?
I reviewed this paper to gain insights into **actuator design** and **overall energy management** for legged locomotion to apply these principles to my robotic actuators. This paper represents **three major energy-loss**
1. **Heat loss from actuator**
2. **Friction loss in transmission**
3. **Interaction loss between system and environment** 

I was particularly impressed by the intuitive analysis of the **energy flow cycle** in respect of actuator. Also, systematic methods to minimize these losses are well organized, such as employing

- **High torque density motor**
- **Energy regenerative electronic system**
- **Low loss transmission**
- **Low gear transmission**

It ultimately uses the **Cost of Transport (CoT)** as a key metric to evaluate the total energy efficiency of the locomotive system.

[Insert Figure 01 here]

## Key Contributions
- **Energy Analysis** : effectively reduced energy loss based on energy flow of the entire locomotive system. 
- **High Efficiency** : MIT Cheetah achieved a cost of transport of 0.5 that rivals running animals and significantly lower than other running robots of its time.
- **Proprioceptive Actuator Design** : Demonstrated the effectiveness of low-gear ratio actuators(QDD) for dynamic interactions


## Background of why I read this paper
In my previous project, **Development of Cycloidal-QDD Actuator**, I focused primarily on a mechanical implementation of my actuator to ensure the actuator worked. However, I realized the torque density and energy management system were not optimized. I lacked a comprehensive understanding of how individual actuator efficiency impacts the overall locomotive system. 

This paper was perfect resource to bridge that gap. It clearly organizes the principle of energy-efficient actuator in dynamic locomotion. As I'm now focusing on building high-performance actuators for successful dynamic control, understanding the principle applied to MIT Cheetah is crucial for my future work.

## Critical Thinking & Takeaway

