using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GunController : MonoBehaviour
{
	public Animator anim;
	public PlayerStats ps;
	public GameObject knifeObject;
	public GameObject OriginalKnife;

	//Effects
	public AudioSource shootAudioSource;
	public AudioClip shootSound;

	//Bullets
	public Transform bulletSpawnPoint;
	public Transform bulletPrefab;
	public float bulletForce = 400f;
	public float fireDelayTime = 0.13f;
	private bool outOfAmmo;
	private int ammo;
	private int maxAmmo;
	public bool canFire;
	public float shotAlertTimer = 9.0f;


	public Camera gunCamera;
	public float fovSpeed = 11.0f;
	public float defaultFov = 40.0f;
	public float aimFov = 30.0f;
	//TODO - Fix FOV on gun pickup

	private bool isAttacking;
	private bool isAiming;
	public bool shotsFired = false;

	// Start is called before the first frame update
	void Start()
	{
		AmmoControlOnStart();
		knifeObject.SetActive(false);
	}

	// Update is called once per frame
	void Update()
	{
		//Detect ADS
		IsADS();

		//Detect Knife attack
		KnifeAttack();

		//TODO - fix this, shouldnt need to update every time (only on event)
		UpdateAmmo();

		//Fire Gun
		if (Input.GetMouseButtonDown(0) && !outOfAmmo && canFire)
		{
			FireGun();
		}
	}

	void IsADS()
	{
		if (Input.GetButton("Fire2"))
		{
			gunCamera.fieldOfView = Mathf.Lerp(gunCamera.fieldOfView,
				aimFov, fovSpeed * Time.deltaTime);

			isAiming = true;

			anim.SetBool("Aim", true);
		}
		else
		{
			gunCamera.fieldOfView = Mathf.Lerp(gunCamera.fieldOfView,
				defaultFov, fovSpeed * Time.deltaTime);

			isAiming = false;

			anim.SetBool("Aim", false);
		}
	}

	void KnifeAttack()
	{
		if (Input.GetKeyDown(KeyCode.Q) && !isAttacking)
		{
			StartCoroutine(knifeTimer());
			anim.Play("Knife Attack 1", 0, 0f);
		}
	}

	void FireGun()
	{
		anim.Play("Fire", 0, 0f);
		StartCoroutine(FireDelay());
		StartCoroutine(ShotAlert());

		//muzzleParticles.Emit(1);

		//Remove 1 bullet from ammo
		ps.ammo -= 1;

		shootAudioSource.clip = shootSound;
		shootAudioSource.Play();

		if (!isAiming) //if not aiming
		{
			anim.Play("Fire", 0, 0f);
		}
		else //if aiming
		{
			anim.Play("Aim Fire", 0, 0f);
		}
		//Spawn bullet at bullet spawnpoint
		float randOne = Random.Range(0.02f, -0.02f);
		float randTwo = Random.Range(0.02f, -0.02f);
		Quaternion newRotation = new Quaternion(bulletSpawnPoint.transform.rotation.x + randOne, bulletSpawnPoint.transform.rotation.y + randTwo, bulletSpawnPoint.transform.rotation.z, bulletSpawnPoint.transform.rotation.w);
		var bullet = (Transform)Instantiate(
			bulletPrefab,
			bulletSpawnPoint.transform.position,
			newRotation);

		//Add velocity to the bullet
		bullet.GetComponent<Rigidbody>().velocity =
		bullet.transform.forward * bulletForce;
	}

	IEnumerator FireDelay()
    {
		canFire = false;
		yield return new WaitForSeconds(fireDelayTime);
		canFire = true;
	}

	void AmmoControlOnStart()
    {
		ps.ammo = 5;
		ammo = ps.ammo;
		maxAmmo = ps.maxAmmo;
		canFire = true;
		outOfAmmo = true;
		if (ammo > 0)
		{
			outOfAmmo = false;
		}
	}

	void UpdateAmmo()
    {
		ammo = ps.ammo;
		if (ammo > ps.maxAmmo)
		{
			ammo = ps.maxAmmo;
		}
		if (ammo < 1)
		{
			outOfAmmo = true;
		}
		else
		{
			outOfAmmo = false;
		}
	}
	IEnumerator knifeTimer()
	{
		isAttacking = true;
		knifeObject.SetActive(true);
		yield return new WaitForSeconds(1.9f);
		knifeObject.SetActive(false);
		isAttacking = false;
	}

	IEnumerator ShotAlert()
    {
		shotsFired = true;
		yield return new WaitForSeconds(shotAlertTimer);
		shotsFired = false;
	}

}
