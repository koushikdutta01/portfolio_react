---
# yaml-language-server: $schema=schemas/page.schema.json
Object type:
    - Page
Backlinks:
    - Networks
Creation date: "2026-01-19T12:19:22Z"
Created by:
    - Koushik
Emoji: ⚙️
id: bafyreiauj6z7kfyunpfyfi5gja7mzsanzvrp6aaewtuayyjkmgap2n2oqu
---
# How the Internet Works   
The Internet is a Interconnected Network   
### Network   
 When two or more computers are connected and can talk to each other.    
### Internet   
A massive, sprawling network of interconnected networks.   
From Your Brain to Your Router   
- You: "Hey computer, get me Google!"   
- Your Computer & The Switch: Your computer is connected to a Switch. A switch connects multiple computers on the same network. And it only sends the information to the desired MAC address yes it uses and layer 2 address that is MAC address, which keeps a Cam table to store all the Mac addresses in the network    
- The Router (Your Default Gateway): The switch then sends the request to the Router. The router is the Gatekeeper and Postmaster of your network.   
    - It's the "Default Gateway" because it's the default place to send any request that isn't for a local device or to send something outside of your network.   
    - It's the only device that talks directly to the outside world.   
   
Here's a simple look at the flow:   
```
1           [Your PC]      [Your Phone]      [Your TV]
2               |                |                 |
3               +----------------+-----------------+
4                                |
5                         [-- The Switch --]
6                         (Directs local traffic)
7                                |
8                        [-- The Router --]
9                      (The Default Gateway)
10                                |
11                                v
12                          To the Internet!

```
Leaving the House: Your ISP   
Your router doesn't connect directly to the internet's core. It connects to your Internet Service Provider (ISP)—companies like Jio, Airtle, BSNL or your local fiber provider.   
The ISP is like your city's main post office. It takes the message from your router and sends it out onto the global information superhighway.   
The Global Superhighway: Data Packets and Submarine Cables   
Your request for google.com is broken down into tiny pieces of data called packets.   
- These packets don't travel as one big file. They are like a fleet of tiny delivery trucks, each with a piece of the puzzle and the final destination address.   
- They travel over the internet's backbone—a massive network of high-speed fiber optic cables.   
- These cables run across the entire planet, lying on the ocean floor! These are the submarine cables, making the internet a true physical, global phenomenon. The tiny request is literally crossing oceans in milliseconds.   
   
Now Finding the Destination - The Internet's GPS   
So how do the packets find the right server out of billions? The router knows where to send the packets next, but not the final address. For that, we need two key things:   
1. DNS (The Domain Name System): Think of this as the Internet's Phonebook. Your computer doesn't know where google.com is. So, its first action is to ask a DNS server: "Hey, what's the IP address for google.com?" The DNS server looks it up and replies with a specific address, like 142.250.190.78.   
2. IP Address (The GPS Coordinate): An IP address is the unique, numerical address for every device and server on the internet. Now that your computer has the IP address from DNS, it stamps it on every packet.   
   
Here's the process:   
```
1 1. You: "I want google.com"
2    |
3    v
4 2. Your Browser -> DNS Server: "What's the IP for google.com?"
5    |
6    v
7 3. DNS Server -> Your Browser: "It's 142.250.190.78"
8    |
9    v
10 4. Your Browser → Router → ISP → Internet: "Send these packets to 142.250.190.78!"

```
The packets then travel across the internet backbone, from router to router, until they reach the Google server with that specific IP address. The server then sends back the website data in new packets, which race all the way back to you.   
The Magic Glue: Protocols (TCP/IP)   
How does all this happen without turning into a "vast mess"? Protocols. These are the strict rules of communication that all computers on the internet agree to use. The main one is TCP/IP.   
- IP (Internet Protocol): Its job is addressing. It's the part that stamps the "To" and "From" IP addresses on each packet.   
- TCP (Transmission Control Protocol): Its job is reliability. It numbers the packets, so the receiving computer can reassemble them in the correct order. It also checks for errors and requests re-sends for any lost packets. It’s the quality control that makes sure you get the full picture, not a garbled mess.   
