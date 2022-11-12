using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerClass : MonoBehaviour
{

    private int playerTickets;

    // Start is called before the first frame update
    void Start()
    {
        playerTickets = 0;
    }

    // Update is called once per frame
    void Update()
    {

    }

    //At the end of each game call this function to add tickets to the players tickets variable (attach to UI)
    public void AddTickets(int tickets)
    {
        playerTickets += tickets;
    }
}
